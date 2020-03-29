#!/bin/sh

set -e

ROOT="$GOPATH/src/github.com/tradingAI"
PROJECT_ROOT="$ROOT/tweb"
PROTO_ROOT="$ROOT/proto"
PROTO_GEN_DIR="$PROTO_ROOT/gen"
PROTO_TWEB="$PROTO_ROOT/tweb"
PROTO_COMMON="$PROTO_ROOT/common"
PROTO_MODEL="$PROTO_ROOT/model"
PROTO_SCHEDULER="$PROTO_ROOT/scheduler"

rm -rf $PROTO_GEN_DIR

for element in `ls $PROTO_ROOT`
    do  
        if [ -d $PROTO_ROOT/$element ];then 
            echo build proto $PROTO_ROOT/$element
            protoc \
                -I $PROTO_ROOT \
                --go_out=plugins=grpc:$GOPATH/src \
                $PROTO_ROOT/$element/*.proto
        fi  
    done


PROTO_GEN_GO_DIR=$PROTO_GEN_DIR/go
for element in `ls $PROTO_GEN_GO_DIR`
    do  
        if [ -d $PROTO_GEN_GO_DIR/$element ];then
            cd $PROTO_GEN_GO_DIR/$element && rm -rf go.mod && go mod init
        fi  
    done


# frontend
FRONTEND_ROOT="$PROJECT_ROOT/frontend"

# clear old
rm -rf $FRONTEND_ROOT/src/proto
mkdir -p $FRONTEND_ROOT/src/proto/admin

# we have to generate js/ts from proto one file at a time
for pb in $PROTO_TWEB/*.proto; do
    file=$(basename -- "$pb") # turn `/path/to/some.proto` to `some.proto`
    filename="${file%.*}" # turn `some.proto` to `some`
    
     # need `--keep-case` since GoLang will keep the case, thus we require the javascript side to do the same thing. Otherwise, the server will return something like `avatar_url` but the client expects a `avatarUrl`.
    $FRONTEND_ROOT/node_modules/.bin/pbjs \
        --keep-case \
        --lint "eslint-disable default-case, block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars" \
        -t static-module \
        -w es6 \
        -p $PROTO_ROOT \
        -o $FRONTEND_ROOT/src/proto/$filename.js \
        $pb
    $FRONTEND_ROOT/node_modules/.bin/pbts \
        -o $FRONTEND_ROOT/src/proto/$filename.d.ts \
        $FRONTEND_ROOT/src/proto/$filename.js
done