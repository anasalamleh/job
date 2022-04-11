xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Panel")
                .setHost(host,"xui_ui_panel10")
                .setDock("none")
                .setLeft("-0.9904761904761905em")
                .setTop("-0.9904761904761905em")
                .setWidth("146.28571428571428em")
                .setHeight("82.28571428571429em")
                .setPosition("relative")
                .setDisplay("inline-block")
                .setSandboxTheme("classic")
                .setCaption("TQD HUB")
                .setCustomStyle({
                    "KEY" : {
                        "margin" : "1em"
                    }
                })
            );
            
            host.xui_ui_panel10.append(
                xui.create("xui.UI.ButtonViews")
                .setHost(host,"xui_ui_buttonviews8")
                .setItems([
                    {
                        "id" : "a",
                        "caption" : "page1",
                        "image" : "",
                        "imageClass" : "xui-uicmd-add"
                    },
                    {
                        "id" : "b",
                        "caption" : "page2",
                        "image" : "",
                        "imageClass" : "xui-uicmd-opt"
                    },
                    {
                        "id" : "c",
                        "caption" : "page3",
                        "image" : "",
                        "imageClass" : "xui-uicmd-pin"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setBarLocation("left")
                .setBarSize("6.095238095238095em")
                .setSideBarStatus("fold")
                .setValue("a")
            );
            
            host.xui_ui_buttonviews8.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"xui_ui_treeview8")
                .setItems([
                    {
                        "id" : "node1",
                        "sub" : [
                            "node11",
                            {
                                "id" : "node12",
                                "imageClass" : "xui-icon-xui"
                            },
                            "node13",
                            "node14"
                        ],
                        "caption" : "node1"
                    },
                    {
                        "id" : "node2",
                        "iniFold" : false,
                        "caption" : "node2",
                        "sub" : [
                            {
                                "id" : "node21",
                                "caption" : "node21"
                            },
                            {
                                "id" : "node22",
                                "caption" : "node22"
                            },
                            {
                                "id" : "node23",
                                "caption" : "node23"
                            },
                            {
                                "id" : "node24",
                                "caption" : "node24"
                            }
                        ]
                    }
                ])
                .setLeft("0em")
                .setTop("0em"),
                "a"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});