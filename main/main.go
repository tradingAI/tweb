package main

import (
	"flag"

	packr "github.com/gobuffalo/packr/v2"
	"github.com/golang/glog"
	"github.com/tradingAI/tweb/server"
)

var frontend = packr.New("frontend", "../frontend/build")

func main() {
	flag.Parse()
	flag.Set("logtostderr", "true")

	runServer()
}

func runServer() {
	// load config
	conf, err := server.LoadConf()
	if err != nil {
		glog.Fatal(err)
	}

	// new Server
	s, err := server.New(conf, frontend)
	if err != nil {
		glog.Fatal(err)
	}
	defer s.Free()

	// start server
	err = s.StartOrDie()
	if err != nil {
		glog.Fatal(err)
	}
}
