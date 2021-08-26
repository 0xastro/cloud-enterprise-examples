(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{Jlhi:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return l}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var r=n("7ljp"),o=n("013z");n("qKvR");function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i,s={},p=(i="PageDescription",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",e)}),c={_frontmatter:s},b=o.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(r.b)(b,a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)(p,{mdxType:"PageDescription"},Object(r.b)("p",null,"Use of Terraform Provisioners instead of user_data")),Object(r.b)("p",null,"The compute guide pattern uses a Terraform code to do the configuration of the VSI, this configuration is discouraged - even by ",Object(r.b)("a",a({parentName:"p"},{href:"https://www.terraform.io/docs/provisioners/"}),"Terraform documentation")," - to be done with Terraform Provisioners such as ",Object(r.b)("inlineCode",{parentName:"p"},"file")," and ",Object(r.b)("inlineCode",{parentName:"p"},"remote_exec"),". However, this page will explain how to so it, if you still want to use them."),Object(r.b)("p",null,"Instead of using the ",Object(r.b)("inlineCode",{parentName:"p"},"user_data")," attribute, you can use the Terraform ",Object(r.b)("a",a({parentName:"p"},{href:"https://www.terraform.io/docs/provisioners/file.html"}),"file provisioner")," to deploy the JSON file to the provisioned VSI, and you can use the ",Object(r.b)("a",a({parentName:"p"},{href:"https://www.terraform.io/docs/provisioners/remote-exec.html"}),"remote-exec Provisioner")," to installs Node.js and ",Object(r.b)("a",a({parentName:"p"},{href:"https://github.com/typicode/json-server"}),"json-server"),", before to start the server."),Object(r.b)("p",null,"That code would be like this inside the ",Object(r.b)("inlineCode",{parentName:"p"},"ibm_is_instance.iac_app_instance")," resource replacing the ",Object(r.b)("inlineCode",{parentName:"p"},"user_data")," attribute."),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-hcl",metastring:"path=compute.tf",path:"compute.tf"}),'resource "ibm_is_instance" "iac_app_instance" {\n  ...\n  provisioner "file" {\n    source      = "db.min.json"\n    destination = "/home/ubuntu/db.min.json"\n    connection {\n      user        = "ubuntu"\n      private_key = var.private_key\n      host        = ibm_is_floating_ip.iac_app_floating_ip.address\n    }\n  }\n\n  provisioner "remote-exec" {\n    inline = [\n      "curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -",\n      "sudo apt-get install -y nodejs",\n      "sudo npm install -g json-server",\n      "json-server --watch /home/ubuntu/db.min.json --port ${var.port} --host 0.0.0.0"\n    ]\n  }\n  ...\n}\n')),Object(r.b)("p",null,"As you can see the ",Object(r.b)("inlineCode",{parentName:"p"},"file")," provisioner needs the private key to make a connection to the server, so the variable ",Object(r.b)("inlineCode",{parentName:"p"},"private_key")," is required in a similar way the ",Object(r.b)("inlineCode",{parentName:"p"},"public_key")," was stored. As the private key contain new lines and Terraform requires one line to assign the value to the variable, let’s use the following command:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-bash"}),"echo -n \"private_key = \\\"$(awk -v ORS='\\\\\\\\n' '1' ~/.ssh/id_rsa)\\\"\\n\" >> secret.auto.tfvars\n")),Object(r.b)("p",null,"The variable has to be defined in the ",Object(r.b)("inlineCode",{parentName:"p"},"variables.tf")," file, like so:"),Object(r.b)("pre",null,Object(r.b)("code",a({parentName:"pre"},{className:"language-hcl"}),'variable "private_key" {}\n')),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"INCOMPLETE")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-iac-resources-compute-provisioners-index-mdx-c6278507864a902d6ac0.js.map