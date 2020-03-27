set -e
cd "$(dirname "$0")"

cd ..
git clone https://github.com/tradingAI/proto.git
cd tweb
cd frontend
make install
cd ..
make proto
go test -v ./...
