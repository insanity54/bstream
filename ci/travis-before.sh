#!/bin/bash -ex

# create a server private key
openssl genrsa -out ../test-key.pem 1024

# create a csr
openssl req -new -key ../test-key.pem -out ../test-csr.pem -config openssl.cnf -batch

# self sign
openssl x509 -req -in ../test-csr.pem -signkey ../test-key.pem -out ../test-cert.pem