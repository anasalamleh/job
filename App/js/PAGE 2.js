xui.Class('App.PAGE 2', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout1")
                .setLeft("5.833333333333333em")
                .setTop("1.6666666666666667em")
                .setWidth("56.666666666666664em")
                .setHeight("33.333333333333336em")
                .setLayoutData({
                    "rows":5,
                    "cols":6,
                    "merged":[
                        {
                            "row":1,
                            "col":1,
                            "rowspan":1,
                            "colspan":2,
                            "removed":false
                        },
                        {
                            "row":2,
                            "col":1,
                            "rowspan":1,
                            "colspan":2,
                            "removed":false
                        },
                        {
                            "row":1,
                            "col":4,
                            "rowspan":1,
                            "colspan":2,
                            "removed":false
                        },
                        {
                            "row":2,
                            "col":4,
                            "rowspan":1,
                            "colspan":2,
                            "removed":false
                        },
                        {
                            "row":3,
                            "col":1,
                            "rowspan":1,
                            "colspan":5,
                            "removed":false
                        },
                        {
                            "row":4,
                            "col":1,
                            "rowspan":1,
                            "colspan":5,
                            "removed":false
                        },
                        {
                            "row":0,
                            "col":0,
                            "rowspan":1,
                            "colspan":6,
                            "removed":false
                        }
                    ],
                    "rowSetting":{
                        "1":{
                            "manualHeight":50
                        },
                        "2":{
                            "manualHeight":33
                        },
                        "3":{
                            "manualHeight":32
                        },
                        "4":{
                            "manualHeight":174
                        },
                        "5":{
                            "manualHeight":24
                        }
                    },
                    "colSetting":{
                        "E":{
                            "manualWidth":50
                        }
                    },
                    "cells":{
                        "A1":{
                            "value":"Staff Form",
                            "style":{
                                "textAlign":"center",
                                "fontSize":"20px",
                                "fontFamily":"arial black,avant garde"
                            }
                        },
                        "A2":{
                            "value":"Name"
                        },
                        "D2":{
                            "value":"Birthday"
                        },
                        "A3":{
                            "value":"Gender"
                        },
                        "D3":{
                            "value":"Style"
                        },
                        "A4":{
                            "value":"Desc"
                        },
                        "A5":{
                            "value":"Memo",
                            "style":{
                                "backgroundColor":"#FFE4B5"
                            }
                        },
                        "B5":{
                            "value":"This is a form layout demo!",
                            "style":{
                                "textAlign":"left",
                                "verticalAlign":"bottom",
                                "fontStyle":"italic",
                                "color":"#BC8F8F",
                                "backgroundColor":"#FFE4B5"
                            }
                        },
                        "B1":{
                            "style":{
                                "textAlign":"center",
                                "fontSize":"20px",
                                "fontFamily":"arial black,avant garde"
                            }
                        },
                        "C1":{
                            "style":{
                                "textAlign":"center",
                                "fontSize":"20px",
                                "fontFamily":"arial black,avant garde"
                            }
                        },
                        "D1":{
                            "style":{
                                "textAlign":"center",
                                "fontSize":"20px",
                                "fontFamily":"arial black,avant garde"
                            }
                        },
                        "E1":{
                            "style":{
                                "textAlign":"center",
                                "fontSize":"20px",
                                "fontFamily":"arial black,avant garde"
                            }
                        },
                        "F1":{
                            "style":{
                                "textAlign":"center",
                                "fontSize":"20px",
                                "fontFamily":"arial black,avant garde"
                            }
                        },
                        "C5":{
                            "style":{
                                "textAlign":"left",
                                "verticalAlign":"bottom",
                                "fontStyle":"italic",
                                "color":"#BC8F8F",
                                "backgroundColor":"#FFE4B5"
                            }
                        },
                        "D5":{
                            "style":{
                                "textAlign":"left",
                                "verticalAlign":"bottom",
                                "fontStyle":"italic",
                                "color":"#BC8F8F",
                                "backgroundColor":"#FFE4B5"
                            }
                        },
                        "E5":{
                            "style":{
                                "textAlign":"left",
                                "verticalAlign":"bottom",
                                "fontStyle":"italic",
                                "color":"#BC8F8F",
                                "backgroundColor":"#FFE4B5"
                            }
                        },
                        "F5":{
                            "style":{
                                "textAlign":"left",
                                "verticalAlign":"bottom",
                                "fontStyle":"italic",
                                "color":"#BC8F8F",
                                "backgroundColor":"#FFE4B5"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input3")
                .setName("B2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("20.416666666666668em")
                .setHeight("2.6666666666666665em")
                .setLabelPos("none"),
                "B2"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput21")
                .setName("E2")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.333333333333334em")
                .setHeight("2.6666666666666665em")
                .setLabelPos("none")
                .setType("date")
                .setValue("106372800000"),
                "E2"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.RadioBox")
                .setHost(host,"xui_ui_radiobox1")
                .setName("B3")
                .setItems([
                    {
                        "id":"m",
                        "caption":"Male"
                    },
                    {
                        "id":"f",
                        "caption":"Femail"
                    }
                ])
                .setLeft("0em")
                .setTop("0em")
                .setWidth("20.416666666666668em")
                .setHeight("2.5833333333333335em")
                .setLabelPos("none")
                .setLabelHAlign("left")
                .setValue("a"),
                "B3"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput32")
                .setName("E3")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("14.333333333333334em")
                .setHeight("2.5833333333333335em")
                .setLabelPos("none")
                .setType("color"),
                "E3"
            );
            
            host.xui_ui_formlayout1.append(
                xui.create("xui.UI.RichEditor")
                .setHost(host,"xui_ui_richeditor2")
                .setName("B4")
                .setLeft("0em")
                .setTop("0em")
                .setWidth("46.083333333333336em")
                .setHeight("14.416666666666666em")
                .setLabelPos("none")
                .setLabelHAlign("left"),
                "B4"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});