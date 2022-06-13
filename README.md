# hyperledger-ssi-app

Hyperledger-ssi-app is a Self - Sovereign Identity application by which you are able to keep your identity secured and at the same time also prove your identity to the verifier without revealing them. These applications are built using Hyperledger Aries, which depends on Hyperledger Indy as a Distributed Ledger and Hyperledger Ursa as a cryptography library. 

# Prerequisites

Linux OS (Ubuntu recommended)

Docker, Docker compose

Hyperledger Indy, Ursa, Aries

Von network

Python and Aries Cloud Agent - Python

Javascript

ReactJS

Github

# Installation 

After insalling and setting up all the prerequisites you have to open a new bash shell navigate to the directory of the cloned von network and start von-network by running the following command:

./manage start

Next open a new terminal and clone this repository with the command 

git clone https://github.com/manosl7/hyperledger-ssi-app

Then in the same terminal navigate to cloned repository with running the command:

cd hyperledger-ssi-app/demo

After that you have to open three (3) more terminals in the same directory (One for each Agent). Start the first Agent Unipi by issuing the following command :

./run_demo unipi

In the second terminal start Agent Manos by issuing the following command :

./run_demo manos

In the third terminal start Agent Nick by issuing the following command :

./run_demo nick

And last, in the last terminal start Agent IBM by issuing the command :

./run_demo ibm

The next step is to open new terminal window and the change dir to :

cd hyperledger-ssi-app/demo/agents

open three (3) more terminals in the same directory (One for each Agent). Start the first Agent Unipi by issuing the following command :

cd hyperledger-ssi-app/demo/agents/UNIPI

yarn install

yarn start

In the second terminal start Agent Manos by issuing the following command :

cd hyperledger-ssi-app/demo/agents/Manos

yarn install

yarn start

In the third terminal start Agent Nick by issuing the following command :

cd hyperledger-ssi-app/demo/agents/Nick

yarn install

yarn start

And last, in the last terminal start Agent IBM by issuing the command :

cd hyperledger-ssi-app/demo/agents/IBM

yarn install

yarn start

After doing all that go to your browser and check the running web applications of each agent in a seperate tab. 

