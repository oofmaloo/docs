"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[393],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),h=l,g=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,o=new Array(i);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9571:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var a=n(7462),l=n(3366),i=(n(7294),n(3905)),o=["components"],r={},s="Setting Up A Celestia Bridge Node",p={unversionedId:"nodes/bridge-node",id:"nodes/bridge-node",title:"Setting Up A Celestia Bridge Node",description:"This tutorial will go over the steps to setting up your Celestia Bridge node.",source:"@site/docs/nodes/bridge-node.md",sourceDirName:"nodes",slug:"/nodes/bridge-node",permalink:"/nodes/bridge-node",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/nodes/bridge-node.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"Types of Nodes",permalink:"/category/types-of-nodes"},next:{title:"Setting Up A Celestia Validator Node",permalink:"/nodes/validator-node"}},d={},u=[{value:"Overview of Bridge Nodes",id:"overview-of-bridge-nodes",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Setting Up Your Bridge Node",id:"setting-up-your-bridge-node",level:2},{value:"Setup The Dependencies",id:"setup-the-dependencies",level:3},{value:"Install Golang",id:"install-golang",level:3},{value:"Optional: Deploying The Celestia App",id:"optional-deploying-the-celestia-app",level:2},{value:"Install Celestia App",id:"install-celestia-app",level:3},{value:"Setup the P2P Networks",id:"setup-the-p2p-networks",level:3},{value:"Configure Pruning",id:"configure-pruning",level:3},{value:"Reset Network",id:"reset-network",level:3},{value:"Optional: Quick-Sync with Snapshot",id:"optional-quick-sync-with-snapshot",level:3},{value:"Start the Celestia-App with SystemD",id:"start-the-celestia-app-with-systemd",level:3},{value:"Deploy the Celestia Node",id:"deploy-the-celestia-node",level:2},{value:"Install Celestia Node",id:"install-celestia-node",level:3},{value:"Get the trusted hash",id:"get-the-trusted-hash",level:3},{value:"Initialize the Bridge Node",id:"initialize-the-bridge-node",level:3},{value:"Configure the Bridge Node",id:"configure-the-bridge-node",level:3},{value:"Start the Bridge Node with SystemD",id:"start-the-bridge-node-with-systemd",level:3}],c={toc:u};function h(e){var t=e.components,r=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-a-celestia-bridge-node"},"Setting Up A Celestia Bridge Node"),(0,i.kt)("p",null,"This tutorial will go over the steps to setting up your Celestia Bridge node."),(0,i.kt)("p",null,"Bridge nodes connect the data availability layer and the consensus layer while\nalso having the option of becoming a validator."),(0,i.kt)("h2",{id:"overview-of-bridge-nodes"},"Overview of Bridge Nodes"),(0,i.kt)("p",null,"A Celestia bridge node has the following properties:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Import and process \u201craw\u201d headers & blocks from a trusted Core process\n(meaning a trusted RPC connection to a celestia-core node) in the Consensus\nnetwork. Bridge Nodes can run this Core process internally (embedded) or\nsimply connect to a remote endpoint. Bridge Nodes also have the option of\nbeing an active validator in the Consensus network."),(0,i.kt)("li",{parentName:"ol"},"Validate and erasure code the \u201craw\u201d blocks"),(0,i.kt)("li",{parentName:"ol"},"Supply block shares with data availability headers to Light Nodes in the\nDA network.\n",(0,i.kt)("img",{alt:"bridge-node-diagram",src:n(8842).Z,width:"2802",height:"700"}))),(0,i.kt)("p",null,"From an implementation perspective, Bridge Nodes run two separate processes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Celestia App with Celestia Core\n(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app"},"see repo"),")"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Celestia App")," is the state machine where the application and the\nproof-of-stake logic is run. Celestia App is built on\n",(0,i.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/"},"Cosmos SDK")," and also encompasses\n",(0,i.kt)("strong",{parentName:"li"},"Celestia Core"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Celestia Core")," is the state interaction, consensus and block production\nlayer. Celestia Core is built on\n",(0,i.kt)("a",{parentName:"li",href:"https://docs.tendermint.com/"},"Tendermint Core"),", modified to store data roots\nof erasure coded blocks among other changes\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/celestiaorg/celestia-core/tree/master/docs/celestia-architecture"},"see ADRs"),")."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Celestia Node (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node"},"see repo"),")"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Celestia Node")," augments the above with a separate libp2p network that\nserves data availability sampling requests. The team sometimes refer to\nthis as the \u201chalo\u201d network.")))),(0,i.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,i.kt)("p",null,"The following hardware minimum requirements are recommended for running the\nbridge node:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,i.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,i.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,i.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,i.kt)("h2",{id:"setting-up-your-bridge-node"},"Setting Up Your Bridge Node"),(0,i.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64\ninstance machine."),(0,i.kt)("h3",{id:"setup-the-dependencies"},"Setup The Dependencies"),(0,i.kt)("p",null,"Once you have setup your instance, ssh into the instance to begin setting up\nthe box with all the needed dependencies in order to run your bridge node."),(0,i.kt)("p",null,"First, make sure to update and upgrade the OS:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update && sudo apt upgrade -y\n")),(0,i.kt)("p",null,"These are essential packages that are necessary to execute many tasks like\ndownloading files, compiling and monitoring the node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install curl tar wget clang pkg-config libssl-dev jq build-essential \\\ngit make ncdu -y\n")),(0,i.kt)("h3",{id:"install-golang"},"Install Golang"),(0,i.kt)("p",null,"Golang will be installed on this machine in order for us to be able to build\nthe necessary binaries for running the bridge node. For Golang specifically,\nit\u2019s needed to be able to compile Celestia Application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.17.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\n')),(0,i.kt)("p",null,"Now we need to add the ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,i.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'echo "export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin" >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n')),(0,i.kt)("p",null,"To check if Go was installed correctly run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,i.kt)("p",null,"Output should be the version installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"go version go1.17.2 linux/amd64\n")),(0,i.kt)("h2",{id:"optional-deploying-the-celestia-app"},"Optional: Deploying The Celestia App"),(0,i.kt)("p",null,"This section describes part 1 of Celestia Bridge Node setup: running a Celestia\nApp daemon with an internal Celestia Core node."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Make sure you have at least 100+ Gb of free space to safely install+run\nthe Bridge Node.")),(0,i.kt)("p",null,"Completing this step allows you to connect your Bridge Node to a Celestia App\ninstance running. Otherwise, you can connect directly to an existing Celestia\nApp endpoint remotely and skip over to the\n",(0,i.kt)("a",{parentName:"p",href:"#deploy-the-celestia-node"},"Deploy the Celestia Node")," section."),(0,i.kt)("h3",{id:"install-celestia-app"},"Install Celestia App"),(0,i.kt)("p",null,"The steps below will create a binary file named ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-appd"),"\ninside ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin")," folder which will be used later to run the node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'cd $HOME\nrm -rf celestia-app\ngit clone https://github.com/celestiaorg/celestia-app.git\ncd celestia-app/\nAPP_VERSION=$(curl -s \\\n  https://api.github.com/repos/celestiaorg/celestia-app/releases/latest \\\n  | jq -r ".tag_name")\ngit checkout tags/$APP_VERSION -b $APP_VERSION\nmake install\n')),(0,i.kt)("p",null,"To check if the binary was successfully compiled you can run the binary\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"--help")," flag:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd --help\n")),(0,i.kt)("p",null,"You should see a similar output (with helpful example commands):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'Stargate CosmosHub App\n\nUsage:\n  celestia-appd [command]\n\nUse "celestia-appd [command] --help" for more information about a command.\n')),(0,i.kt)("h3",{id:"setup-the-p2p-networks"},"Setup the P2P Networks"),(0,i.kt)("p",null,"For this section of the guide, select the network you want to connect to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/devnet-2#setup-p2p-network"},"Devnet-2"))),(0,i.kt)("p",null,"After that, you can proceed with the rest of the tutorial."),(0,i.kt)("h3",{id:"configure-pruning"},"Configure Pruning"),(0,i.kt)("p",null,"For lower disk space usage we recommend setting up pruning using the\nconfigurations below. You can change this to your own pruning configurations\nif you want:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'pruning="custom"\npruning_keep_recent="100"\npruning_keep_every="5000"\npruning_interval="10"\n\nsed -i -e "s/^pruning *=.*/pruning = \\"$pruning\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-keep-recent *=.*/pruning-keep-recent = \\\n\\"$pruning_keep_recent\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-keep-every *=.*/pruning-keep-every = \\\n\\"$pruning_keep_every\\"/" $HOME/.celestia-app/config/app.toml\nsed -i -e "s/^pruning-interval *=.*/pruning-interval = \\\n\\"$pruning_interval\\"/" $HOME/.celestia-app/config/app.toml\n')),(0,i.kt)("h3",{id:"reset-network"},"Reset Network"),(0,i.kt)("p",null,"This will delete all data folders so we can start fresh:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd unsafe-reset-all\n")),(0,i.kt)("h3",{id:"optional-quick-sync-with-snapshot"},"Optional: Quick-Sync with Snapshot"),(0,i.kt)("p",null,"Syncing from Genesis can take a long time, depending on your hardware. Using\nthis method you can synchronize your Celestia node very quickly by downloading\na recent snapshot of the blockchain. If you would like to sync from the Genesis,\nthen you can skip this part."),(0,i.kt)("p",null,"If you want to use snapshot, determine the network you would like to sync\nto from the list below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/devnet-2#quick-sync-with-snapshot"},"Devnet-2"))),(0,i.kt)("h3",{id:"start-the-celestia-app-with-systemd"},"Start the Celestia-App with SystemD"),(0,i.kt)("p",null,"SystemD is a daemon service useful for running applications as background processes."),(0,i.kt)("p",null,"Create Celestia-App systemd file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-appd.service\n[Unit]\nDescription=celestia-appd Cosmos daemon\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia-appd start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,i.kt)("p",null,"If the file was created successfully you will be able to see its content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-appd.service\n")),(0,i.kt)("p",null,"Now, download the address book. You have 2 options:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'wget -O $HOME/.celestia-app/config/addrbook.json "https://raw.githubusercontent.com/maxzonder/celestia/main/addrbook.json"\n')),(0,i.kt)("p",null,"OR"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'wget -O $HOME/.celestia-app/config/addrbook.json "https://raw.githubusercontent.com/qubelabsio/celestia/main/addrbook.json"\n')),(0,i.kt)("p",null,"Enable and start celestia-appd daemon:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable celestia-appd\nsudo systemctl start celestia-appd\n")),(0,i.kt)("p",null,"Check if daemon has been started correctly:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status celestia-appd\n")),(0,i.kt)("p",null,"Check daemon logs in real time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo journalctl -u celestia-appd.service -f\n")),(0,i.kt)("p",null,"To check if your node is in sync before going forward:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -s localhost:26657/status | jq .result | jq .sync_info\n")),(0,i.kt)("p",null,"Make sure that you have ",(0,i.kt)("inlineCode",{parentName:"p"},'"catching_up": false'),", otherwise leave it running\nuntil it is in sync."),(0,i.kt)("h2",{id:"deploy-the-celestia-node"},"Deploy the Celestia Node"),(0,i.kt)("p",null,"This section describes part 2 of Celestia Bridge Node setup: running a\nCelestia Node daemon."),(0,i.kt)("h3",{id:"install-celestia-node"},"Install Celestia Node"),(0,i.kt)("p",null,"Install the Celestia Node binary, which will be used to run the Bridge Node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},'cd $HOME\nrm -rf celestia-node\ngit clone https://github.com/celestiaorg/celestia-node.git\ncd celestia-node/\nAPP_VERSION=$(curl -s \\\n  https://api.github.com/repos/celestiaorg/celestia-node/releases/latest \\\n  | jq -r ".tag_name")\ngit checkout tags/$APP_VERSION -b $APP_VERSION\nmake install\n')),(0,i.kt)("p",null,"Verify that the binary is working and check the version with ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia version")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ celestia version\nSemantic version: v0.2.0\nCommit: 1fcf0c0bb5d5a4e18b51cf12440ce86a84cf7a72\nBuild Date: Fri 04 Mar 2022 01:15:07 AM CET\nSystem version: amd64/linux\nGolang version: go1.17.5\n")),(0,i.kt)("h3",{id:"get-the-trusted-hash"},"Get the trusted hash"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Caveat: You need a running celestia-app in order to continue this guideline.\nPlease refer to\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/networks/celestia-app.md"},"celestia-app.md"),"\nfor installation.  ")),(0,i.kt)("p",null,"You need to have the trusted server to initialize the Bridge Node. You can use\n",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:26657")," for your local run of ",(0,i.kt)("inlineCode",{parentName:"p"},"celestia-app"),". The trusted hash\nis an optional flag and does not need to be used. If you are not passing it,\nthe Bridge Node will just sync from the beginning, which is also the preferred\noption of how to run it."),(0,i.kt)("p",null,"An example of how to query your local celestia-app to get the trusted hash:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl -s http://localhost:26657/block?height=1 | grep -A1 block_id | grep hash\n")),(0,i.kt)("h3",{id:"initialize-the-bridge-node"},"Initialize the Bridge Node"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.remote <ip:port of celestia-app>\n")),(0,i.kt)("p",null,"If you want to use the trusted hash anyways, here is how to initialize it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"celestia bridge init --core.remote <ip:port of celestia-app> \\\n--headers.trusted-hash <hash_from_celestia_app>\n")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia bridge init --core.remote tcp://127.0.0.1:26657 --headers.trusted-hash 4632277C441CA6155C4374AC56048CF4CFE3CBB2476E07A548644435980D5E17\n")),(0,i.kt)("h3",{id:"configure-the-bridge-node"},"Configure the Bridge Node"),(0,i.kt)("p",null,"To configure your Bridge Node to connect to your network of choice,\nselect one of the networks you would like to connect to from this list and\nfollow the instructions there before proceeding with the rest of this guide:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/nodes/devnet-2#configure-the-bridge-node"},"Devnet-2"))),(0,i.kt)("h3",{id:"start-the-bridge-node-with-systemd"},"Start the Bridge Node with SystemD"),(0,i.kt)("p",null,"SystemD is a daemon service useful for running applications as background processes."),(0,i.kt)("p",null,"Create Celestia Bridge systemd file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tee <<EOF >/dev/null /etc/systemd/system/celestia-bridge.service\n[Unit]\nDescription=celestia-bridge Cosmos daemon\nAfter=network-online.target\n\n[Service]\nUser=$USER\nExecStart=$HOME/go/bin/celestia bridge start\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096\n\n[Install]\nWantedBy=multi-user.target\nEOF\n")),(0,i.kt)("p",null,"If the file was created successfully you will be able to see its content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/systemd/system/celestia-bridge.service\n")),(0,i.kt)("p",null,"Enable and start celestia-bridge daemon:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl enable celestia-bridge\nsudo systemctl start celestia-bridge && sudo journalctl -u \\\ncelestia-bridge.service -f\n")),(0,i.kt)("p",null,"Now, the Celestia bridge node will start syncing headers and storing blocks\nfrom Celestia application."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: At startup, we can see the ",(0,i.kt)("inlineCode",{parentName:"p"},"multiaddress")," from Celestia Bridge Node.\nThis is ",(0,i.kt)("strong",{parentName:"p"},"needed for future Light Node")," connections and communication\nbetween Celestia Bridge Nodes  ")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"/ip4/46.101.22.123/tcp/2121/p2p/12D3KooWD5wCBJXKQuDjhXFjTFMrZoysGVLtVht5hMoVbSLCbV22\n")),(0,i.kt)("p",null,"You should be seeing logs coming through of the bridge node syncing."),(0,i.kt)("p",null,"You have successfully set up a bridge node that is syncing with the network."))}h.isMDXComponent=!0},8842:function(e,t,n){t.Z=n.p+"assets/images/BridgeNodes-c9d5799bf588d3becaefb313bd03b0c2.png"}}]);