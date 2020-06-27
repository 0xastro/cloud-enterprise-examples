(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{OVS1:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),o=n("013z");n("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},l=c("AnchorLinks"),s=c("AnchorLink"),b={_frontmatter:i},p=o.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(p,r({},b,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(l,{mdxType:"AnchorLinks"},Object(a.b)(s,{mdxType:"AnchorLink"},"Introduction"),Object(a.b)(s,{mdxType:"AnchorLink"},"Containers"),Object(a.b)(s,{mdxType:"AnchorLink"},"Why containers ?"),Object(a.b)(s,{mdxType:"AnchorLink"},"Different Container Standards"),Object(a.b)(s,{mdxType:"AnchorLink"},"Benefits"),Object(a.b)(s,{mdxType:"AnchorLink"},"Docker"),Object(a.b)(l,{small:!0,mdxType:"AnchorLinks"},Object(a.b)(s,{mdxType:"AnchorLink"},"Docker Image"),Object(a.b)(s,{mdxType:"AnchorLink"},"Docker Container"),Object(a.b)(s,{mdxType:"AnchorLink"},"Docker Engine"),Object(a.b)(s,{mdxType:"AnchorLink"},"Docker Registry"),Object(a.b)(s,{mdxType:"AnchorLink"},"Docker Commands")),Object(a.b)(s,{mdxType:"AnchorLink"},"References")),Object(a.b)("h2",null,"Introduction"),Object(a.b)("p",null,"You wanted to run your application on different computing environments. It may be your laptop, test environment, staging environment or production environment."),Object(a.b)("p",null,"So, when you run it on these different environments, will your application work reliably ?"),Object(a.b)("p",null,"What if some underlying software changes ? What if the security policies are different ? or something else changes ?"),Object(a.b)("p",null,"To solve this problems, we need Containers."),Object(a.b)("h2",null,"Containers"),Object(a.b)("p",null,"Containers are a standard way to package an application and all its dependencies so that it can be moved between environments and run without change. They work by hiding the differences between applications inside the container so that everything outside the container can be standardized."),Object(a.b)("p",null,"For example, Docker created standard way to create images for Linux Containers."),Object(a.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.21890547263681%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(a.b)("iframe",r({parentName:"div"},{src:"https://www.youtube.com/embed/0qotVMX-J5s",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(a.b)("h2",null,"Why containers ?"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"We can run them anywhere."),Object(a.b)("li",{parentName:"ul"},"They are lightweight ."),Object(a.b)("li",{parentName:"ul"},"Isolate your application from others.")),Object(a.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"75%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(a.b)("iframe",r({parentName:"div"},{src:"https://www.youtube.com/embed/muTkqVewJMI",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(a.b)("h2",null,"Different Container Standards"),Object(a.b)("p",null,"There are many different container standards available today. Some of them are as follows."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Docker")," - The most common standard, made Linux containers usable by the masses."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Rocket (rkt)")," - An emerging container standard from CoreOS, the company that developed etcd."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Garden")," - The format Cloud Foundry builds using buildpacks."),Object(a.b)("p",null,"Among them, Docker was one of the most popular mainstream container software tools."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Open Container Initiative (OCI)"))),Object(a.b)("p",null,"A Linux Foundation project developing a governed container standard. Docker and Rocket are OCI-compliant. But, Garden is not."),Object(a.b)("h2",null,"Benefits"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Lightweight"),Object(a.b)("li",{parentName:"ul"},"Scalable"),Object(a.b)("li",{parentName:"ul"},"Efficient"),Object(a.b)("li",{parentName:"ul"},"Portable"),Object(a.b)("li",{parentName:"ul"},"Supports agile development")),Object(a.b)("p",null,"To know more about Containerization, we have couple of guides. Feel free to check them out."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.ibm.com/cloud/learn/containerization"}),"Containerization: A Complete Guide"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.ibm.com/cloud/learn/containers"}),"Containers: A Complete Guide"),".")),Object(a.b)("h2",null,"Docker"),Object(a.b)("p",null,"Docker is one of the most popular Containerization platforms which allows you to develop, deploy, and run application inside containers."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"It is an open source project."),Object(a.b)("li",{parentName:"ul"},"Can run it anywhere.")),Object(a.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"75%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(a.b)("iframe",r({parentName:"div"},{src:"https://www.youtube.com/embed/wFNWl-QwPfc",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(a.b)("p",null,"An installation of Docker includes an engine. This comes with a daemon, REST APIs, and CLI. Users can use CLI to interact with the docker using commands. These commands are sent to the daemon which listens for the Docker Rest APIs which in turn manages images and containers. The engine runs a container by retrieving its image from the local system or registry. A running container starts one or more processes in the Linux kernel."),Object(a.b)("h3",null,"Docker Image"),Object(a.b)("p",null,"A read-only snapshot of a container that is stored in Docker Hub or in private repository. You use an image as a template for building containers."),Object(a.b)("p",null,"These images are build from the ",Object(a.b)("inlineCode",{parentName:"p"},"Dockerfile"),"."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Dockerfile")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"It is a text document that contains all the instructions that are necessary to build a docker image."),Object(a.b)("li",{parentName:"ul"},"It is written in an easy-to-understand syntax."),Object(a.b)("li",{parentName:"ul"},"It specifies the operating system."),Object(a.b)("li",{parentName:"ul"},"It also includes things like environmental variables, ports, file locations etc.")),Object(a.b)("p",null,"If you want to try building docker images, try this course on ",Object(a.b)("a",r({parentName:"p"},{href:"https://www.katacoda.com/"}),"Katacoda")," (Interactive Learning Platform)."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.katacoda.com/courses/docker/2"}),"Building Container Images")," -  Estimated Time: 10 minutes.")),Object(a.b)("h3",null,"Docker Container"),Object(a.b)("p",null,"The standard unit where the application service is located or transported. It packages up all code and its dependencies so that the application runs quickly and reliably from one computing environment to another."),Object(a.b)("p",null,"If you want to try deploying a docker container, try this course on ",Object(a.b)("a",r({parentName:"p"},{href:"https://www.katacoda.com/"}),"Katacoda")," (Interactive Learning Platform)."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.katacoda.com/courses/docker/deploying-first-container"}),"Deploying Your First Docker Container")," -  Estimated Time: 10 minutes.")),Object(a.b)("h3",null,"Docker Engine"),Object(a.b)("p",null,"Docker Engine is a program that creates, ships, and runs application containers. The engine runs on any physical or virtual machine or server locally, in private or public cloud. The client communicates with the engine to run commands."),Object(a.b)("h3",null,"Docker Registry"),Object(a.b)("p",null,"The registry stores, distributes, and shares container images. It is available in software as a service (SaaS) or in an enterprise to deploy anywhere you that you choose."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Docker Hub")," is a popular registry. It is a registry which allows you to download docker images which are built by different communities. You can also store your own images there. You can check out various images available on docker hub ",Object(a.b)("a",r({parentName:"p"},{href:"https://hub.docker.com/search?q=&type=image"}),"here"),"."),Object(a.b)("h3",null,"Docker Commands"),Object(a.b)("p",null,"Below are some commands we use often on Docker."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"# Know docker version\ndocker -version\n\n# Run a container\ndocker run <image>\n\n# List containers running\ndocker ps\n\n# Stop a container\ndocker stop <container-name|container-id>\n\n# Remove a container\ndocker rm <container-name|container-id>\n\n# Login into registry\ndocker login\n\n# Build an image\ndocker build <image_name>:<tag> .\n\n# Pull the image\ndocker pull <image_name>:<tag>\n\n# Push an image\ndocker push <image_name>:<tag>\n\n# List images\ndocker images\n")),Object(a.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"75%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(a.b)("iframe",r({parentName:"div"},{src:"https://www.youtube.com/embed/CPJLKqvR8II",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}))," "),Object(a.b)("p",null,"If you are interested, check this ",Object(a.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/content/course/containers-and-docker/0"}),"course")," out on Containers and Docker."),Object(a.b)("h2",null,"References"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.docker.com/resources"}),"Docker resources")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://docs.docker.com/get-started/"}),"Docker tutorial")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://dzone.com/articles/evolution-of-linux-containers-future"}),"The Evolution of Linux Containers and Their Future")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://coreos.com/rkt"}),"rkt")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://docs.cloudfoundry.org/concepts/architecture/garden.html"}),"Cloud Foundry Garden container")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.opencontainers.org"}),"Open Container Initiative (OCI)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://www.cncf.io"}),"Cloud Native Computing Foundation (CNCF)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",r({parentName:"li"},{href:"https://blog.docker.com/2017/07/demystifying-open-container-initiative-oci-specifications"}),"Demystifying the Open Container Initiative (OCI) Specifications"))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-concepts-containers-index-mdx-c0266e10d75d85b6337b.js.map