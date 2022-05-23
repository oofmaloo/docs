"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[403],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(a),h=l,g=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=p;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},7289:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return u}});var n=a(7462),l=a(3366),i=(a(7294),a(3905)),o=["components"],r={},s="Setting Up A Celestia Light Node",d={unversionedId:"nodes/light-node",id:"nodes/light-node",title:"Setting Up A Celestia Light Node",description:"This tutorial will guide you through setting up a Celestia Light Node,",source:"@site/docs/nodes/light-node.md",sourceDirName:"nodes",slug:"/nodes/light-node",permalink:"/nodes/light-node",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nodes/light-node.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"Setting Up A Celestia Validator Node",permalink:"/nodes/validator-node"},next:{title:"Participate",permalink:"/category/participate"}},c={},u=[{value:"Overview of Light Nodes",id:"overview-of-light-nodes",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Setting Up Your Light Node",id:"setting-up-your-light-node",level:2},{value:"Setup The Dependencies",id:"setup-the-dependencies",level:3},{value:"Install Golang",id:"install-golang",level:3},{value:"Install Celestia Node",id:"install-celestia-node",level:2},{value:"Run the Light Node",id:"run-the-light-node",level:3},{value:"Initialize the Light Node",id:"initialize-the-light-node",level:4},{value:"Start the Light Node",id:"start-the-light-node",level:4},{value:"Start The Daemon",id:"start-the-daemon",level:4},{value:"Check Daemon Status",id:"check-daemon-status",level:4},{value:"Check Daemon Logs",id:"check-daemon-logs",level:4},{value:"Data Availability Sampling(DAS)",id:"data-availability-samplingdas",level:2},{value:"Pre-Requisites",id:"pre-requisites",level:3},{value:"Create a wallet",id:"create-a-wallet",level:3},{value:"Download Celestia-App Binary",id:"download-celestia-app-binary",level:4},{value:"Check Binary Compiled",id:"check-binary-compiled",level:4},{value:"Create the Wallet",id:"create-the-wallet",level:4},{value:"Fund the Wallet",id:"fund-the-wallet",level:3},{value:"Send a transaction",id:"send-a-transaction",level:3},{value:"Observe DAS in action",id:"observe-das-in-action",level:3}],p={toc:u};function h(e){var t=e.components,r=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-a-celestia-light-node"},"Setting Up A Celestia Light Node"),(0,i.kt)("p",null,"This tutorial will guide you through setting up a Celestia Light Node,\nwhich can allow you to do data-sampling on the Data Availability (DA)\nnetwork."),(0,i.kt)("h2",{id:"overview-of-light-nodes"},"Overview of Light Nodes"),(0,i.kt)("p",null,"Light nodes (CLN) ensure data availability. This is the most common way\nto interact with the Celestia network."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: In future implementations, Light Nodes can also publish\ntransactions (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node/blob/main/docs/adr/adr-004-state-interaction.md"},"see ADR"),"),\nthough in Devnet, transactions are left to Bridge Nodes.  ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"light-node",src:a(8236).Z,width:"1058",height:"245"})),(0,i.kt)("p",null,"Light Nodes have the following properties:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Connect to a ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/celestiaorg/networks#celestia-validator-bridge-nodes"},"Celestia Bridge Node"),"\nin the DA network. ",(0,i.kt)("em",{parentName:"li"},"Note: Light Nodes do not communicate with each other,\nbut only with Bridge Nodes.")),(0,i.kt)("li",{parentName:"ol"},"Listen for ExtendedHeaders, i.e. wrapped \u201craw\u201d headers, that notify\nCelestia Nodes of new block headers and relevant DA metadata."),(0,i.kt)("li",{parentName:"ol"},"Perform data availability sampling (DAS) on the received headers")),(0,i.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,i.kt)("p",null,"The following hardware minimum requirements are recommended for running\nthe light node:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Memory: 2 GB RAM"),(0,i.kt)("li",{parentName:"ul"},"CPU: Single Core"),(0,i.kt)("li",{parentName:"ul"},"Disk: 5 GB SSD Storage"),(0,i.kt)("li",{parentName:"ul"},"Bandwidth: 56 Kbps for Download/56 Kbps for Upload")),(0,i.kt)("h2",{id:"setting-up-your-light-node"},"Setting Up Your Light Node"),(0,i.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64\ninstance machine."),(0,i.kt)("h3",{id:"setup-the-dependencies"},"Setup The Dependencies"),(0,i.kt)("p",null,"Once you have setup your instance, ssh into the instance to begin\nsetting up the box with all the needed dependencies in order to\nrun your light node."),(0,i.kt)("p",null,"First, make sure to update and upgrade the OS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update && sudo apt upgrade -y\n")),(0,i.kt)("p",null,"These are essential packages that are necessary to execute many\ntasks like downloading files, compiling and monitoring the node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install curl tar wget clang pkg-config libssl-dev jq \\\nbuild-essential git make ncdu -y\n")),(0,i.kt)("h3",{id:"install-golang"},"Install Golang"),(0,i.kt)("p",null,"Golang will be installed on this machine in order for us to be able\nto build the necessary binaries for running the light node. For Golang\nspecifically, it\u2019s needed to be able to compile Celestia Light Node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.17.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\n')),(0,i.kt)("p",null,"Now we need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n')),(0,i.kt)("p",null,"To check if Go was installed correctly run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,i.kt)("p",null,"Output should be the version installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.17.2 linux/amd64\n")),(0,i.kt)("h2",{id:"install-celestia-node"},"Install Celestia Node"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Make sure that you have at least 5+ Gb of free space\nfor Celestia Light Node  ")),(0,i.kt)("p",null,"Install the Celestia Node binary. Make sure that you have ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"golang")," installed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'git clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\nAPP_VERSION=$(curl -s \\\n  https://api.github.com/repos/celestiaorg/celestia-node/releases/latest \\\n  | jq -r ".tag_name")\ngit checkout tags/$APP_VERSION -b $APP_VERSION\nmake install\n')),(0,i.kt)("h3",{id:"run-the-light-node"},"Run the Light Node"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you want to connect to your Celestia Bridge Node and start syncing\nthe Celestia Light Node from a non-genesis hash, then consider editing\n",(0,i.kt)("inlineCode",{parentName:"p"},"config.toml")," file.")),(0,i.kt)("p",null,"More information on ",(0,i.kt)("inlineCode",{parentName:"p"},"config.toml")," is found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/networks/blob/master/config-toml.md"},"here"),"."),(0,i.kt)("h4",{id:"initialize-the-light-node"},"Initialize the Light Node"),(0,i.kt)("p",null,"Run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light init\n")),(0,i.kt)("h4",{id:"start-the-light-node"},"Start the Light Node"),(0,i.kt)("p",null,"Start the Light Node as daemon process in the background"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-lightd.service\n[Unit]\nDescription=celestia-lightd Light Node\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia light start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,i.kt)("p",null,"If the file was created succesfully you will be able to see its content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-lightd.service\n")),(0,i.kt)("h4",{id:"start-the-daemon"},"Start The Daemon"),(0,i.kt)("p",null,"Enable and start celestia-lightd daemon:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable celestia-lightd\nsudo systemctl start celestia-lightd\n")),(0,i.kt)("h4",{id:"check-daemon-status"},"Check Daemon Status"),(0,i.kt)("p",null,"Check if daemon has been started correctly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status celestia-lightd\n")),(0,i.kt)("h4",{id:"check-daemon-logs"},"Check Daemon Logs"),(0,i.kt)("p",null,"Check daemon logs in real time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo journalctl -u celestia-lightd.service -f\n")),(0,i.kt)("p",null,"Now, the Celestia Light Node will start syncing headers. After sync\nis finished, Light Node will do Data Availability Sampling (DAS) from\nthe Bridge Node."),(0,i.kt)("h2",{id:"data-availability-samplingdas"},"Data Availability Sampling(DAS)"),(0,i.kt)("h3",{id:"pre-requisites"},"Pre-Requisites"),(0,i.kt)("p",null,"To continue, you will need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A Celestia Light Node connected to a Bridge Node"),(0,i.kt)("li",{parentName:"ul"},"A Celestia wallet")),(0,i.kt)("p",null,"Open 2 terminals in order to see how DASing works:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First terminal: tail your Light Node logs"),(0,i.kt)("li",{parentName:"ol"},"Second terminal: use Celestia App's CLI to submit a paid\n",(0,i.kt)("inlineCode",{parentName:"li"},"payForMessage")," tx to the network")),(0,i.kt)("h3",{id:"create-a-wallet"},"Create a wallet"),(0,i.kt)("p",null,"First, you need a wallet to pay for the transaction."),(0,i.kt)("p",null,"Option 1: Use the Keplr wallet which has beta support for Celestia."),(0,i.kt)("p",null,"Check out the Observer ",(0,i.kt)("a",{parentName:"p",href:"https://staking.celestia.observer/"},"here")),(0,i.kt)("p",null,"Option 2: Download the Celestia App binary which has a CLI for creating\nwallets"),(0,i.kt)("p",null,"You can follow the next steps for Option 2:"),(0,i.kt)("h4",{id:"download-celestia-app-binary"},"Download Celestia-App Binary"),(0,i.kt)("p",null,"Download the celestia-appd binary inside ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin")," folder which\nwill be used to create wallets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/celestiaorg/celestia-app.git\ncd celestia-app/\ngit checkout tags/v0.1.0 -b v0.1.0\nmake install\n")),(0,i.kt)("h4",{id:"check-binary-compiled"},"Check Binary Compiled"),(0,i.kt)("p",null,"To check if the binary was succesfully compiled you can run the\nbinary using the ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd --help\n")),(0,i.kt)("h4",{id:"create-the-wallet"},"Create the Wallet"),(0,i.kt)("p",null,"Create the wallet with any wallet name you want e.g."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd keys add mywallet\n")),(0,i.kt)("p",null,"Save the mnemonic output as this is the only way to recover your\nvalidator wallet in case you lose it!"),(0,i.kt)("h3",{id:"fund-the-wallet"},"Fund the Wallet"),(0,i.kt)("p",null,"You can fund an existing wallet via Discord by sending this message to #faucet channel:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"!faucet celes1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")),(0,i.kt)("p",null,"Wait to see if you get a confirmation that the tokens have been\nsuccessfully sent. To check if tokens have arrived succesfully to\nthe destination wallet run the command below replacing the public\naddress with your own:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd q bank balances celes1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx\n")),(0,i.kt)("h3",{id:"send-a-transaction"},"Send a transaction"),(0,i.kt)("p",null,"In the second terminal, submit a ",(0,i.kt)("inlineCode",{parentName:"p"},"payForMessage")," transaction with\n",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-appd")," (or do so in the wallet):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx payment payForMessage <hex_namespace> <hex_message> \\\n--from <wallet_name> --keyring-backend <keyring-name> \\\n--chain-id <chain_name>\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tx payment payForMessage 0102030405060708 \\\n68656c6c6f43656c6573746961444153 --from myWallet --keyring-backend test \\\n--chain-id devnet-2\n")),(0,i.kt)("h3",{id:"observe-das-in-action"},"Observe DAS in action"),(0,i.kt)("p",null,"In the Light Node logs you should see how data availability sampling works:"),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"INFO das das/daser.go:96 sampling successful {\u201cheight\u201d: 81547, \u201chash\u201d: \\\n\u201cDE0B0EB63193FC34225BD55CCD3841C701BE841F29523C428CE3685F72246D94\u201d, \\\n\u201csquare width\u201d: 2, \u201cfinished (s)\u201d: 0.000117466}\n")))}h.isMDXComponent=!0},8236:function(e,t,a){t.Z=a.p+"assets/images/LightNodes-6e065ce02c37e36a01707b9b1edd36b3.png"}}]);