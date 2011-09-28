AUI.add("aui-diagram-builder-base",function(ai){var X=ai.Lang,d=X.isArray,ax=X.isBoolean,O=X.isNumber,F=X.isObject,aB=X.isString,M=function(A){return(A instanceof ai.ArrayList);},V=function(A){return(A instanceof ai.Node);},H=function(A){return(A instanceof ai.AvailableField);},aK=ai.Array,Y="add",o="addNode",aJ="auto",P="availableField",T="availableFields",aG="availableFieldsDragConfig",v="boundingBox",aD="builder",ac="cancel",af="canvas",az="clearfix",f="column",a="container",ag="content",y="contentBox",e="contentContainer",S="contentNode",I="createDocumentFragment",D="diagram",ao="diagram-builder",ad="disk",r="draggable",aF="drop",ar="dropConfig",ab="dropContainer",aw="field",w="fields",q="fieldsContainer",av="height",s="helper",aa="icon",z="iconClass",aq="id",am="label",x="layout",ap="list",R="maxFields",u="node",g="parentNode",ah="propertyList",aE="rendered",at="save",t="settings",Q="tab",K="tabView",b="tabs",h="tabview",N="toolbar",m="toolbarContainer",C=ai.getClassName,aI=" ",i=".",j="#",aI=" ",E="_",n=C(f),B=C(D,aD,af),aj=C(D,aD,ag,a),G=C(D,aD,aF,a),ay=C(D,aD,aw),l=C(D,aD,aw,r),c=C(D,aD,aw,aa),ae=C(D,aD,aw,am),Z=C(D,aD,w,a),ak=C(D,aD,Q,Y),L=C(D,aD,Q,t),au=C(D,aD,b),U=C(D,aD,b,ag),an=C(D,aD,N,a),al=C(s,az),p=C(aa),J=C(x),aC=C(h,ag),aH=C(h,ap);var k=ai.Component.create({NAME:P,ATTRS:{draggable:{value:true,validator:ax},label:{validator:aB},iconClass:{validator:aB},id:{value:ai.guid(),setter:"_setId",validator:aB},node:{valueFn:function(aL){var A=this;if(!V(aL)){aL=ai.Node.create(ai.Lang.sub(A.FIELD_ITEM_TEMPLATE,{iconClass:A.get(z)}));aL.setData(P,A);}return aL;},validator:V,writeOnce:true},type:{value:u,validator:aB}},EXTENDS:ai.Base,buildNodeId:function(A){return T+E+aw+E+A;},getAvailableFieldById:function(A){return ai.AvailableField.getAvailableFieldByNode(j+ai.AvailableField.buildNodeId(A));},getAvailableFieldByNode:function(A){var A=ai.one(A);if(V(ai.one(A))){return A.getData(P);}return null;},prototype:{FIELD_ITEM_TEMPLATE:'<li class="'+ay+'">'+'<span class="'+[p,c].join(aI)+' {iconClass}"></span>'+'<div class="'+ae+'"></div>'+"</li>",initializer:function(){var A=this;var aL=A.get(u);A.after({draggableChange:A._afterDraggableChange,idChange:A._afterIdChange,labelChange:A._afterLabelChange});A.labelNode=aL.one(i+ae);A._uiSetDraggable(A.get(r));A._uiSetId(A.get(aq));A._uiSetLabel(A.get(am));},_afterDraggableChange:function(aL){var A=this;A._uiSetDraggable(aL.newVal);},_afterIdChange:function(aL){var A=this;A._uiSetId(aL.newVal);},_afterLabelChange:function(aL){var A=this;A._uiSetLabel(aL.newVal);},_setId:function(A){return ai.AvailableField.buildNodeId(A);},_uiSetDraggable:function(aL){var A=this;A.get(u).toggleClass(l,aL);},_uiSetId:function(aL){var A=this;A.get(u).set(aq,aL);},_uiSetLabel:function(aL){var A=this;A.labelNode.setContent(aL);}}});ai.AvailableField=k;var W=function(){};W.ATTRS={fields:{value:[],setter:"_setFields",validator:function(A){return d(A)||M(A);}},maxFields:{value:Infinity,validator:O}};ai.mix(W.prototype,{_setFields:function(aL){var A=this;if(M(aL)){return aL;}else{return A.createFields(aL);}},_updateFields:function(aL){var A=this;A.set(w,aL);},addField:function(aM,aL){var A=this;if(A.get(w).size()<A.get(R)){var aN=A.createField(aM);if(aN){A._updateFields(A.get(w).add(aN,aL));}return aN;}return null;},createFields:function(aM){var aL=this;var A=[];aK.each(aM,function(aO,aN){if(aN<aL.get(R)){A.push(aL.createField(aO));}});return new ai.ArrayList(A);},removeField:function(aL){var A=this;A._updateFields(A.get(w).remove(aL));},createField:function(A){return A;}});ai.FieldSupport=W;var aA=ai.Component.create({NAME:ao,ATTRS:{availableFields:{setter:"_setAvailableFields",validator:d},availableFieldsDragConfig:{value:null,setter:"_setAvailableFieldsDragConfig",validator:F},canvas:{valueFn:function(){return ai.Node.create(this.CANVAS_TEMPLATE);}},dropConfig:{value:null,setter:"_setDropConfig",validator:F},contentContainer:{valueFn:function(){return ai.Node.create(this.CONTENT_CONTAINER_TEMPLATE);}},dropContainer:{valueFn:function(){return ai.Node.create(this.DROP_CONTAINER_TEMPLATE);}},fieldsContainer:{valueFn:function(){return ai.Node.create(this.FIELDS_CONTAINER_TEMPLATE);}},propertyList:{setter:"_setPropertyList",validator:F,value:null},strings:{value:{addNode:"Add node",cancel:"Cancel",propertyName:"Property Name",save:"Save",settings:"Settings",value:"Value"}},tabView:{setter:"_setTabView",validator:F,value:null,writeOnce:true},toolbar:{setter:"_setToolbar",validator:F,value:null},toolbarContainer:{valueFn:function(){return ai.Node.create(this.TOOLBAR_CONTAINER_TEMPLATE);}}},HTML_PARSER:{contentContainer:i+aj,dropContainer:i+G,fieldsContainer:i+Z,toolbarContainer:i+an,canvas:i+B},UI_ATTRS:[T,w],AUGMENTS:[ai.FieldSupport],prototype:{CONTENT_CONTAINER_TEMPLATE:'<div class="'+aj+'"></div>',DROP_CONTAINER_TEMPLATE:'<div class="'+G+'"></div>',TOOLBAR_CONTAINER_TEMPLATE:'<div class="'+an+'"></div>',FIELDS_CONTAINER_TEMPLATE:'<ul class="'+[Z,al].join(aI)+'"></ul>',CANVAS_TEMPLATE:'<div tabindex="1" class="'+B+'"></div>',fieldsNode:null,propertyList:null,settingsNode:null,tabView:null,toolbar:null,initializer:function(){var A=this;A.publish({cancel:{defaultFn:A._defCancelFn}});A.after({render:A._afterRender,"recordset:update":A._afterRecordsetUpdate});A.after(A._afterUiSetHeight,A,"_uiSetHeight");A.canvas=A.get(af);A.contentContainer=A.get(e);A.dropContainer=A.get(ab);A.fieldsContainer=A.get(q);A.toolbarContainer=A.get(m);},isAvailableFieldsDrag:function(aM){var A=this;var aL=A.availableFieldsDrag;return(aM===aL.dd);},plotFields:function(){var aL=this;var A=aL.get(w);A.each(function(aM){aL.plotField(aM);});},renderUI:function(){var A=this;A._renderTabs();A._renderCanvas();A._uiSetAvailableFields(A.get(T));},syncUI:function(){var A=this;var aL=A.get(y);A._setupDrop();A._setupAvailableFieldsDrag();aL.addClass(J);},_afterActiveTabChange:function(aM){var A=this;var aL=aM.newVal.get(S);if(A.get(aE)&&(aL===A.settingsNode)){A._renderSettings();}},_afterRecordsetUpdate:function(aL){var A=this;
A._handleSaveEvent();},_afterRender:function(aL){var A=this;A.plotFields();},_afterUiSetHeight:function(aL){var A=this;A.contentContainer.setStyle(av,O(aL)?aL+A.DEF_UNIT:aL);A.dropContainer.setStyle(av,O(aL)?aL+A.DEF_UNIT:aL);},_defCancelFn:function(aL){var A=this;A.tabView.selectTab(0);},_handleCancelEvent:function(){var A=this;A.fire(ac);},_handleSaveEvent:function(){var A=this;A.fire(at);},_renderCanvas:function(){var A=this;var aL=A.get(y);var aM=A.canvas;var aN=A.contentContainer;var aO=A.dropContainer;if(!aM.inDoc()){aN.appendChild(aM);}if(!aO.inDoc()){aM.appendChild(aO);}if(aN.inDoc()){aN.get(g).append(aN);}else{aL.appendChild(aN);}},_renderPropertyList:function(){var A=this;if(!A.propertyList){A.propertyList=new ai.PropertyList(A.get(ah)).render(A.settingsNode);A.propertyList.get(v).unselectable();}},_renderSettings:function(){var A=this;A._renderPropertyList();A._renderToolbar();},_renderTabs:function(){var A=this;if(!A.tabView){var aL=new ai.TabView(A.get(K));aL.get(v);A.tabView=aL;A.fieldsNode=aL.getTab(0).get(S);A.settingsNode=aL.getTab(1).get(S);}},_renderToolbar:function(){var A=this;if(!A.toolbar){A.toolbar=new ai.Toolbar(A.get(N)).render(A.settingsNode);}},_setupDrop:function(){var A=this;A.drop=new ai.DD.Drop(A.get(ar));},_setupAvailableFieldsDrag:function(){var A=this;A.availableFieldsDrag=new ai.DD.Delegate(A.get(aG));},_setAvailableFields:function(aM){var aL=this;var A=[];aK.each(aM,function(aO,aN){A.push(H(aO)?aO:new ai.AvailableField(aO));});return A;},_setDropConfig:function(aL){var A=this;return ai.merge({bubbleTargets:A,groups:[T],node:A.dropContainer},aL||{});},_setAvailableFieldsDragConfig:function(aL){var A=this;return ai.merge({bubbleTargets:A,container:A.get(v),dragConfig:{groups:[T],plugins:[{cfg:{moveOnEnd:false},fn:ai.Plugin.DDProxy}]},nodes:i+l},aL||{});},_setPropertyList:function(aL){var A=this;return ai.merge({bubbleTargets:A,width:250,scroll:{height:400,width:aJ}},aL);},_setTabView:function(aO){var aL=this;var aN=aL.get(v);var aP=aN.one(i+aH);var aM={after:{activeTabChange:ai.bind(aL._afterActiveTabChange,aL)},boundingBox:aN.one(i+au),contentBox:aN.one(i+U),bubbleTargets:aL,contentNode:aN.one(i+aC),cssClass:au,listNode:aP,render:aL.get(y)};if(!aP){var A=aL.getStrings();aM.items=[{cssClass:ak,label:A[o]},{cssClass:L,label:A[t]}];}return ai.merge(aM,aO);},_setToolbar:function(aM){var aL=this;var A=aL.getStrings();return ai.merge({activeState:false,bubbleTargets:aL,children:[{handler:ai.bind(aL._handleCancelEvent,aL),label:A[ac]}]},aM);},_uiSetAvailableFields:function(aN){var A=this;var aM=A.fieldsNode;if(aM){var aL=ai.getDoc().invoke(I);aK.each(aN,function(aO){aL.appendChild(aO.get(u));});aM.setContent(A.fieldsContainer.setContent(aL));}},_uiSetFields:function(aL){var A=this;if(A.get(aE)){A.plotFields();}}}});ai.DiagramBuilderBase=aA;},"@VERSION@",{requires:["aui-tabs","aui-property-list","collection","dd"],skinnable:true});AUI.add("aui-diagram-builder-impl",function(ap){var af=ap.Lang,c=af.isArray,aL=af.isBoolean,J=af.isObject,aP=af.isString,ak=ap.WidgetStdMod,aZ=ap.Array,ad="activeElement",V="availableField",z="backspace",ab="boolean",v="boundary",q="boundingBox",aV="builder",aj="cancel",al="canvas",aC="click",aQ="closeEvent",G="closeMessage",aS="condition",j="connectors",an="content",O="controls",aA="controlsToolbar",ay="data",X="delete",aw="deleteConnectorsMessage",o="deleteNodesMessage",aF="description",H="diagram",am="diagram-builder",at="diagramNode",aT="diagram-node-manager",C="diagram-node",aI="dragNode",Q="editing",D="editEvent",L="editMessage",aE="end",a="esc",aK="field",s="fields",aq="fieldsDragConfig",ao="fork",aa="graphic",aJ="height",aB="id",t="join",R="keydown",n="name",p="node",av="p1",au="p2",d="parentNode",l="pencil",az="radius",ah="records",k="recordset",aW="rendered",K="required",aO="selected",aH="shape",W="shapeBoundary",h="shapeInvite",S="source",ax="start",ac="state",i="target",F="task",P="connector",m="transition",U="transitions",e="type",ag="visible",N="width",y="xy",x="zIndex",aY="-",g=".",T="",f="#",I="_",w=ap.getClassName,u=w(H,aV,O),ae=w(H,p),aG=w(H,p,aH,v),b=w(H,p,an),aD=w(H,p,Q),aX=w(H,p,aO),aN=[[35,20],[28,33],[14,34],[5,22],[10,9],[24,6],[34,16],[31,30],[18,35],[6,26],[7,12],[20,5],[33,12],[34,26],[22,35],[9,30],[6,16],[16,6],[30,9],[35,22],[26,34],[12,33],[5,20],[12,7],[26,6],[35,18],[30,31],[16,34],[6,24],[9,10],[22,5],[34,14],[33,28],[20,35],[7,28],[6,14],[18,5],[31,10],[34,24],[24,34],[10,31],[5,18],[14,6],[28,8],[35,20],[28,33],[14,34],[5,22],[10,8],[25,6],[34,16],[31,30],[18,35],[6,26],[8,12],[20,5],[33,12],[33,27],[22,35],[8,30],[6,15],[16,6],[30,9],[35,23],[26,34],[12,32],[5,20],[12,7],[27,7],[35,18],[29,32],[15,34]],r=[[30,5],[35,10],[40,15],[45,20],[50,25],[55,30],[50,35],[45,40],[40,45],[35,50],[30,55],[25,50],[20,45],[15,40],[10,35],[5,30],[10,25],[15,20],[20,15],[25,10]],M=[[5,5],[10,5],[15,5],[20,5],[25,5],[30,5],[35,5],[40,5],[50,5],[55,5],[60,5],[65,5],[65,10],[65,15],[65,20],[65,25],[65,30],[65,35],[65,40],[65,45],[65,50],[65,55],[65,60],[65,65],[60,65],[55,65],[50,65],[45,65],[40,65],[35,65],[30,65],[25,65],[20,65],[15,65],[10,65],[5,65],[5,60],[5,55],[5,50],[5,45],[5,40],[5,35],[5,30],[5,25],[5,20],[5,15],[5,10]],ai=function(a3,A){var a2=c(a3)?a3:a3.get(q).getXY();return[a2[0]+A[0],a2[1]+A[1]];},aU=function(a4,a3){var a2=a3[0]-a4[0],A=a3[1]-a4[1];return Math.sqrt(a2*a2+A*A);},a1=function(bc,ba){var a8=bc.hotPoints,a7=ba.hotPoints,bf=bc.get(q).getXY(),bd=ba.get(q).getXY(),a4,a2,a5,a3,be=Infinity,a6=[[0,0],[0,0]];for(a5=0,a4=a8.length;a5<a4;a5++){var bb=a8[a5],bh=ai(bf,bb);for(a3=0,a2=a7.length;a3<a2;a3++){var a9=a7[a3],bg=ai(bd,a9),A=aU(bg,bh);if(A<be){a6[0]=bb;a6[1]=a9;be=A;}}}return a6;},ar=function(A,a3){var a2=c(a3)?a3:a3.getXY();var a4=c(A)?A:A.getXY();return aZ.map(a4,function(a6,a5){return Math.max(0,a6-a2[a5]);});},E=function(A){return(A instanceof ap.Connector);},aR=function(A){return(A instanceof ap.DataSet);},Y=function(A){return(A instanceof ap.DiagramBuilderBase);},aM=function(A){return(A instanceof ap.DiagramNode);
};window.__dump=function(){var a2="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",A="<br/>";ap.all(".aui-diagram-node").each(function(a8){var a3=T,a5=ap.Widget.getByNode(a8),a4=a5.get("name"),a7=a5.get("boundingBox"),a6=a7.one(".log")||ap.Node.create("<div class=log />").appendTo(a7);a3+=a4+A;a5.get("transitions").each(function(a9){a3+=a2+a2+"t: "+ap.Object.values(a9)+A;});a6.setContent(a3);});};var B=ap.Component.create({NAME:am,ATTRS:{connector:{setter:"_setConnector",value:null},fieldsDragConfig:{value:null,setter:"_setFieldsDragConfig",validator:J},graphic:{valueFn:function(){return new ap.Graphic();},validator:J},strings:{value:{addNode:"Add node",cancel:"Cancel",deleteConnectorsMessage:"Are you sure you want to delete the selected connector(s)?",deleteNodesMessage:"Are you sure you want to delete the selected node(s)?",propertyName:"Property Name",save:"Save",settings:"Settings",value:"Value"}}},EXTENDS:ap.DiagramBuilderBase,FIELDS_TAB:0,SETTINGS_TAB:1,prototype:{editingConnector:null,editingNode:null,selectedConnector:null,selectedNode:null,initializer:function(){var A=this;A.after({render:A.syncConnectionsUI});A.on({cancel:A._onCancel,"drag:drag":A._onDrag,"drag:end":A._onDragEnd,"drop:hit":A._onDropHit,save:A._onSave});A.handlerKeyDown=ap.getDoc().on(R,ap.bind(A._afterKeyEvent,A));A.dropContainer.delegate(aC,ap.bind(A._onNodeClick,A),g+ae);},renderUI:function(){var A=this;ap.DiagramBuilder.superclass.renderUI.apply(this,arguments);A._renderGraphic();},syncUI:function(){var A=this;ap.DiagramBuilder.superclass.syncUI.apply(this,arguments);A._setupFieldsDrag();A.connector=A.get(P);},syncConnectionsUI:function(){var A=this;A.get(s).each(function(a2){a2.syncConnectionsUI();});},clearFields:function(){var a2=this;var A=[];a2.get(s).each(function(a3){A.push(a3);});aZ.each(A,function(a3){a3.destroy();});A=a2.editingConnector=a2.editingNode=a2.selectedNode=null;},closeEditProperties:function(){var A=this;var a2=A.editingNode;var a3=A.tabView;a3.selectTab(ap.DiagramBuilder.FIELDS_TAB);a3.disableTab(ap.DiagramBuilder.SETTINGS_TAB);if(a2){a2.get(q).removeClass(aD);}A.editingConnector=A.editingNode=null;},connect:function(a2,a3){var A=this;if(aP(a2)){a2=ap.Widget.getByNode(f+ap.DiagramNode.buildNodeId(a2));}if(aP(a3)){a3=ap.Widget.getByNode(f+ap.DiagramNode.buildNodeId(a3));}if(a2&&a3){a2.connect(a3.get(n));}return A;},connectAll:function(a2){var A=this;aZ.each(a2,function(a3){if(a3.hasOwnProperty(S)&&a3.hasOwnProperty(i)){A.connect(a3.source,a3.target,a3.connector);}});return A;},createField:function(a2){var A=this;if(!aM(a2)){a2.builder=A;a2.bubbleTargets=A;a2=new (A.getFieldClass(a2.type||p))(a2);}return a2;},deleteSelectedConnectors:function(){var a2=this;var A=a2.getStrings();var a3=a2.getSelectedConnectors();if(a3.length&&confirm(A[aw])){aZ.each(a3,function(a4){var a5=a4.get(m);ap.DiagramNode.getNodeByName(a5.source).disconnect(a5);});a2.stopEditing();}},deleteSelectedNode:function(){var a2=this;var A=a2.getStrings();var a3=a2.selectedNode;if(a3&&!a3.get(K)&&confirm(A[o])){a3.close();a2.editingNode=a2.selectedNode=null;a2.stopEditing();}},eachConnector:function(a2){var A=this;A.get(s).each(function(a3){a3.get(U).each(function(a4){a2.call(A,a3.getConnector(a4),a4,a3);});});},editConnector:function(a2){var A=this;if(a2){var a3=A.tabView;A.closeEditProperties();a3.enableTab(ap.DiagramBuilder.SETTINGS_TAB);a3.selectTab(ap.DiagramBuilder.SETTINGS_TAB);A.propertyList.set(k,a2.getProperties());A.editingConnector=A.selectedConnector=a2;}},editNode:function(a3){var A=this;if(a3){var a2=A.tabView;A.closeEditProperties();a2.enableTab(ap.DiagramBuilder.SETTINGS_TAB);a2.selectTab(ap.DiagramBuilder.SETTINGS_TAB);A.propertyList.set(k,a3.getProperties());a3.get(q).addClass(aD);A.editingNode=A.selectedNode=a3;}},getFieldClass:function(a3){var A=this;var a2=ap.DiagramBuilder.types[a3];if(a2){return a2;}else{ap.log("The field type: ["+a3+"] couldn't be found.");return null;}},getNodesByTransitionProperty:function(a4,a3){var A=this;var a2=[];A.get(s).some(function(a5){a5.get(U).each(function(a6){if(a6[a4]===a3){a2.push(a5);return false;}});});return a2;},getSelectedConnectors:function(){var A=this;var a2=[];A.eachConnector(function(a3){if(a3.get(aO)){a2.push(a3);}});return a2;},getSourceNodes:function(a2){var A=this;return A.getNodesByTransitionProperty(i,a2.get(n));},isFieldsDrag:function(a3){var A=this;var a2=A.fieldsDrag;return(a3===a2.dd);},plotField:function(a2){var A=this;if(!a2.get(aW)){a2.render(A.dropContainer);}},select:function(a2){var A=this;A.unselectNodes();A.selectedNode=a2.set(aO,true).focus();},stopEditing:function(){var A=this;A.unselectConnectors();A.unselectNodes();A.closeEditProperties();},toJSON:function(){var A=this;var a2={nodes:[]};A.get(s).each(function(a4){var a3={transitions:[]};aZ.each(a4.SERIALIZABLE_ATTRS,function(a5){a3[a5]=a4.get(a5);});a4.get(U).each(function(a6){var a5=a4.getConnector(a6);a6.connector=a5.toJSON();a3.transitions.push(a6);});a2.nodes.push(a3);});return a2;},unselectConnectors:function(){var A=this;aZ.each(A.getSelectedConnectors(),function(a2){a2.set(aO,false);});},unselectNodes:function(){var A=this;var a2=A.selectedNode;if(a2){a2.set(aO,false);}A.selectedNode=null;},_afterKeyEvent:function(a2){var A=this;if(a2.hasModifier()||ap.getDoc().get(ad).test(":input,td")){return;}if(a2.isKey(a)){A._onEscKey(a2);}else{if(a2.isKey(z)||a2.isKey(X)){A._onDeleteKey(a2);}}},_onCancel:function(a2){var A=this;A.closeEditProperties();},_onDeleteKey:function(a2){var A=this;A.deleteSelectedConnectors();A.deleteSelectedNode();a2.halt();},_onDrag:function(a3){var A=this;var a2=a3.target;if(A.isFieldsDrag(a2)){var a4=ap.Widget.getByNode(a2.get(aI));a4.alignTransitions();aZ.each(A.getSourceNodes(a4),function(a5){a5.alignTransitions();});}},_onDragEnd:function(a3){var A=this;var a2=a3.target;if(A.isFieldsDrag(a2)){var a4=ap.Widget.getByNode(a2.get(aI));a4.set(y,a4.getLeftTop());}},_onDropHit:function(a3){var A=this;var a2=a3.drag;if(A.isAvailableFieldsDrag(a2)){var a5=a2.get(p).getData(V);
var a4=A.addField({xy:ar(a2.lastXY,A.dropContainer),type:a5.get(e)});A.select(a4);}},_onEscKey:function(a2){var A=this;A.stopEditing();a2.halt();},_onNodeClick:function(a2){var A=this;var a3=ap.Widget.getByNode(a2.currentTarget);A.select(a3);A._onNodeEdit(a2);},_onNodeEdit:function(a2){var A=this;if(!a2.target.ancestor(g+b,true)){return;}var a3=ap.Widget.getByNode(a2.currentTarget);if(a3){A.editNode(a3);}},_onSave:function(a3){var A=this;var a2=A.editingNode;var a4=A.editingConnector;var a5=A.propertyList.get(k);if(a2){aZ.each(a5.get(ah),function(a6){var a7=a6.get(ay);a2.set(a7.attributeName,a7.value);});}else{if(a4){aZ.each(a5.get(ah),function(a6){var a7=a6.get(ay);a4.set(a7.attributeName,a7.value);});}}},_renderGraphic:function(){var A=this;A.get(aa).render(A.get(al));},_setConnector:function(a3){var A=this;if(!E(a3)){var a2=A.get(al).getXY();a3=new ap.Connector(ap.merge({builder:A,graphic:A.get(aa),lazyDraw:true,p1:a2,p2:a2,shapeHover:null},a3));}return a3;},_setFieldsDragConfig:function(a3){var A=this;var a2=A.dropContainer;return ap.merge({bubbleTargets:A,container:a2,dragConfig:{plugins:[{cfg:{constrain:a2},fn:ap.Plugin.DDConstrained},{cfg:{scrollDelay:150},fn:ap.Plugin.DDWinScroll}]},nodes:g+ae},a3||{});},_setupFieldsDrag:function(){var A=this;A.fieldsDrag=new ap.DD.Delegate(A.get(aq));}}});ap.DiagramBuilder=B;ap.DiagramBuilder.types={};var Z=ap.Component.create({NAME:aT,EXTENDS:ap.Base});ap.DiagramNodeManager=new Z();var a0=ap.Component.create({NAME:C,UI_ATTRS:[n,K,aO],ATTRS:{builder:{validator:Y},connectors:{valueFn:"_createDataSet",writeOnce:true},controlsToolbar:{validator:J,valueFn:"_valueControlsToolbar"},description:{value:T,validator:aP},graphic:{writeOnce:true,validator:J},height:{value:60},name:{valueFn:function(){var A=this;return A.get(e)+(++ap.Env._uidx);},validator:aP},required:{value:false,validator:aL},selected:{value:false,validator:aL},shapeBoundary:{validator:J,valueFn:"_valueShapeBoundary"},shapeInvite:{validator:J,value:{radius:12,type:"circle",stroke:{weight:6,color:"#ff6600",opacity:0.8},fill:{color:"#ffd700",opacity:0.8}}},strings:{value:{closeMessage:"Close",description:"Description",editMessage:"Edit",name:"Name",type:"Type"}},tabIndex:{value:1},transitions:{value:null,writeOnce:true,setter:"_setTransitions"},type:{value:p,validator:aP},width:{value:60},zIndex:{value:100}},EXTENDS:ap.Overlay,getNodeByName:function(A){return ap.Widget.getByNode(f+ap.DiagramNode.buildNodeId(A));},buildNodeId:function(A){return at+I+aK+I+A.replace(/[^a-z0-9.:_\-]/ig,"_");},prototype:{boundary:null,hotPoints:[[0,0]],publishedTarget:null,publishedSource:null,CONTROLS_TEMPLATE:'<div class="'+u+'"></div>',SERIALIZABLE_ATTRS:[aF,n,K,e,N,aJ,x,y],initializer:function(){var A=this;A.after({"dataset:remove":ap.bind(A._afterDataSetRemove,A),render:A._afterRender});A.on({nameChange:A._onNameChange});A.publish({boundaryDrag:{defaultFn:A._defBoundaryDrag},boundaryDragEnd:{defaultFn:A._defBoundaryDragEnd},boundaryDragOut:{defaultFn:A._defBoundaryDragOut},boundaryDragOver:{defaultFn:A._defBoundaryDragOver},boundaryDragStart:{defaultFn:A._defBoundaryDragStart},boundaryDrop:{defaultFn:A._defBoundaryDrop},boundaryMouseEnter:{},boundaryMouseLeave:{}});ap.DiagramNodeManager.on({publishedSource:function(a2){A.publishedSource=a2.publishedSource;},releasedSource:function(a2){A.publishedSource.publishedTarget=null;A.publishedSource=null;}});A.get(q).addClass(ae+aY+A.get(e));},destructor:function(){var A=this;A.eachConnector(function(a2,a3,a4){a4.removeTransition(a2.get(m));});A.invite.destroy();A.get(aa).destroy();A.get(aV).removeField(A);},addTransition:function(a3){var A=this;var a2=A.get(U);a3=A.prepareTransition(a3);if(!a2.containsKey(a3.uid)){a3.uid=ap.guid();a2.add(a3.uid,a3);}return a3;},alignTransition:function(a3){var A=this;var a4=ap.DiagramNode.getNodeByName(a3.target);if(a4){var a2=a1(A,a4);a3=ap.merge(a3,{sourceXY:a2[0],targetXY:a2[1]});A.getConnector(a3).setAttrs({p1:ai(A,a3.sourceXY),p2:ai(a4,a3.targetXY)});}},alignTransitions:function(){var A=this;A.get(U).each(ap.bind(A.alignTransition,A));},close:function(){var A=this;return A.destroy();},connect:function(a5){var A=this;a5=A.addTransition(a5);var a2=null;var a6=ap.DiagramNode.getNodeByName(a5.target);if(a6){if(!A.isTransitionConnected(a5)){var a3=A.get(aV);var a4=a1(A,a6);ap.mix(a5,{sourceXY:a4[0],targetXY:a4[1]});a2=new ap.Connector({builder:a3,graphic:a3.get(aa),transition:a5});A.get(j).add(a5.uid,a2);}}A.alignTransition(a5);return a2;},disconnect:function(a2){var A=this;if(A.isTransitionConnected(a2)){A.removeTransition(a2);}__dump();},eachConnector:function(a4){var A=this;var a5=[],a2=[].concat(A.get(j).values),a3=a2.length;aZ.each(A.get(aV).getSourceNodes(A),function(a6){a6.get(j).each(function(a7){if(A.get(n)===a7.get(m).target){a5.push(a6);a2.push(a7);}});});aZ.each(a2,function(a6,a7){a4.call(A,a6,a7,(a7<a3)?A:a5[a7-a3]);});a2=a5=null;return a2;},getConnector:function(a2){var A=this;return A.get(j).item(a2.uid);},getContainer:function(){var A=this;return(A.get(aV).dropContainer||A.get(q).get(d));},getLeftTop:function(){var A=this;return ar(A.get(q),A.getContainer());},getProperties:function(){var A=this;var a2=A.getPropertyModel();aZ.each(a2,function(a5){var a4=A.get(a5.attributeName),a3=af.type(a4);if(a3===ab){a4=String(a4);}a5.value=a4;});return a2;},getPropertyModel:function(){var a2=this;var A=a2.getStrings();return[{attributeName:aF,editor:new ap.TextAreaCellEditor(),name:A[aF]},{attributeName:n,editor:new ap.TextCellEditor({validator:{rules:{value:{required:true}}}}),name:A[n]},{attributeName:e,editor:false,name:A[e]}];},isTransitionConnected:function(a2){var A=this;return A.get(j).containsKey(a2.uid);},prepareTransition:function(a3){var A=this;var a2={source:A.get(n),target:null,uid:ap.guid()};if(aP(a3)){a2.target=a3;}else{if(J(a3)){a2=ap.merge(a2,a3);}}return a2;},removeTransition:function(a2){var A=this;return A.get(U).removeKey(a2.uid);},renderShapeBoundary:function(){var A=this;var a2=A.boundary=A.get(aa).addShape(A.get(W));
a2.end();return a2;},renderShapeInvite:function(){var A=this;var a2=A.invite=A.get(aV).get(aa).addShape(A.get(h));a2.set(ag,false);a2.end();return a2;},syncConnectionsUI:function(){var A=this;A.get(U).each(ap.bind(A.connect,A));},_afterDataSetRemove:function(a3){var A=this;var a2=a3.target;if(a2===A.get(U)){A.get(j).removeKey(a3.prevVal.uid);}else{if(a2===A.get(j)){a3.prevVal.destroy();}}},_afterRender:function(a2){var A=this;A.setStdModContent(ak.BODY,T,ak.AFTER);A._renderGraphic();A._renderControls();},_bindBoundaryEvents:function(){var A=this;A.boundary.detachAll().on({mouseenter:ap.bind(A._onBoundaryMouseEnter,A),mouseleave:ap.bind(A._onBoundaryMouseLeave,A)});},_createDataSet:function(){var A=this;return new ap.DataSet({bubbleTargets:A});},_defBoundaryDrag:function(a4){var A=this;var a3=A.get(aV);var a5=A.boundaryDragDelegate.dd.mouseXY;a3.connector.set(au,a5);if(A.publishedTarget){var a2=A.invite;var a6=a2.get(az)||0;if(!a2.get(ag)){a2.set(ag,true);}a2.setXY([a5[0]-a6,a5[1]-a6]);}},_defBoundaryDragEnd:function(a2){var A=this;A.get(aV).connector.hide();A.publishedSource.invite.set(ag,false);ap.DiagramNodeManager.fire("releasedSource",{releasedSource:A});},_defBoundaryDragOut:function(a3){var A=this;var a2=A.publishedSource;a2.publishedTarget=null;a2.invite.set(ag,false);},_defBoundaryDragOver:function(a3){var A=this;var a2=A.publishedSource;if(a2!==A){a2.publishedTarget=A;}},_defBoundaryDragStart:function(a3){var A=this;var a2=A.get(aV);var a4=A.boundaryDragDelegate.dd.startXY;a2.connector.show().set(av,a4);ap.DiagramNodeManager.fire("publishedSource",{publishedSource:A});},_defBoundaryDrop:function(a5){var a2=this;var A=a2.boundaryDragDelegate.dd;var a4=a5.publishedSource;var a3=a5.publishedTarget;a4.connect(a4.prepareTransition({sourceXY:ar(A.startXY,a4.get(q)),target:a3.get(n),targetXY:ar(A.mouseXY,a3.get(q))}));},_handleCloseEvent:function(a2){var A=this;if(!A.get(K)){A.close();}},_handleEditEvent:function(a2){var A=this;A.get(aV).editNode(A);},_onBoundaryDrag:function(a2){var A=this;A.fire("boundaryDrag",{dragEvent:a2,publishedSource:A.publishedSource});},_onBoundaryDragEnd:function(a4){var A=this;var a2=A.publishedSource;var a3=A.publishedTarget;if(a2&&a3){A.fire("boundaryDrop",{dragEvent:a4,publishedSource:a2,publishedTarget:a3});}A.fire("boundaryDragEnd",{dragEvent:a4,publishedSource:a2});a4.target.get(aI).show();},_onBoundaryDragStart:function(a2){var A=this;A.fire("boundaryDragStart",{dragEvent:a2});a2.target.get(aI).hide();},_onBoundaryMouseEnter:function(a3){var A=this;var a2=A.publishedSource;A.fire("boundaryMouseEnter",{domEvent:a3});if(a2){A.fire("boundaryDragOver",{domEvent:a3,publishedSource:a2});}},_onBoundaryMouseLeave:function(a3){var A=this;var a2=A.publishedSource;A.fire("boundaryMouseLeave",{domEvent:a3});if(a2){A.fire("boundaryDragOut",{domEvent:a3,publishedSource:a2});}},_onNameChange:function(a2){var A=this;A.eachConnector(function(a3,a4,a5){var a6=a3.get(m);a6[(A===a5)?S:i]=a2.newVal;a3.set(m,a6);});},_renderControls:function(){var A=this;var a2=A.get(q);A.controlsNode=ap.Node.create(A.CONTROLS_TEMPLATE).appendTo(a2);},_renderControlsToolbar:function(a2){var A=this;A.controlsToolbar=new ap.Toolbar(A.get(aA)).render(A.controlsNode);A._uiSetRequired(A.get(K));},_renderGraphic:function(){var A=this;A.set(aa,new ap.Graphic({height:A.get(aJ),render:A.bodyNode,width:A.get(N)}));A.renderShapeInvite();A.renderShapeBoundary().addClass(aG);A._bindBoundaryEvents();A._setupBoundaryDrag();},_setTransitions:function(a3){var A=this;if(!aR(a3)){var a2=A._createDataSet();ap.Array.each(a3,function(a5){var a4=ap.guid();a5=J(a5)?ap.mix(a5,{uid:a4}):{uid:a4,target:a5};a2.add(a4,A.prepareTransition(a5));});a3=a2;}return a3;},_setupBoundaryDrag:function(){var A=this;var a2=A.get(aV);A.boundaryDragDelegate=new ap.DD.Delegate({container:A.bodyNode,nodes:g+aG,dragConfig:{useShim:false,plugins:[{cfg:{constrain:(a2?a2.get(al):null)},fn:ap.Plugin.DDConstrained},{cfg:{scrollDelay:150},fn:ap.Plugin.DDWinScroll},{cfg:{borderStyle:"0px",moveOnEnd:false,resizeFrame:false},fn:ap.Plugin.DDProxy}]},on:{"drag:drag":ap.bind(A._onBoundaryDrag,A),"drag:end":ap.bind(A._onBoundaryDragEnd,A),"drag:start":ap.bind(A._onBoundaryDragStart,A)}});ap.Do.after(A._bindBoundaryEvents,A.boundaryDragDelegate.dd,"_unprep",A);},_uiSetName:function(a3){var A=this;var a2=A.get(q);a2.set(aB,ap.DiagramNode.buildNodeId(a3));},_uiSetRequired:function(a4){var a3=this;var a2=a3.getStrings();var A=a3.controlsToolbar;if(A){if(a4){A.remove(aQ);}else{A.add({handler:ap.bind(a3._handleCloseEvent,a3),icon:aj,id:aQ,title:a2[G]});}}},_uiSetSelected:function(a2){var A=this;A.get(q).toggleClass(aX,a2);if(a2&&!A.controlsToolbar){A._renderControlsToolbar();}},_uiSetXY:function(a3){var A=this;var a2=A.getContainer().getXY();this._posNode.setXY([a3[0]+a2[0],a3[1]+a2[1]]);},_valueControlsToolbar:function(a3){var a2=this;var A=a2.getStrings();return{activeState:false,children:[{handler:ap.bind(a2._handleEditEvent,a2),icon:l,id:D,title:A[L]},{handler:ap.bind(a2._handleCloseEvent,a2),icon:aj,id:aQ,title:A[G]}]};},_valueShapeBoundary:function(){var A=this;return{height:40,type:"rect",stroke:{weight:7,color:"transparent"},width:40};}}});ap.DiagramNode=a0;ap.DiagramBuilder.types[p]=ap.DiagramNode;ap.DiagramNodeState=ap.Component.create({NAME:C,ATTRS:{height:{value:40},type:{value:ac},width:{value:40}},EXTENDS:ap.DiagramNode,prototype:{hotPoints:aN,renderShapeBoundary:function(){var A=this;var a2=A.boundary=A.get(aa).addShape(A.get(W));a2.translate(5,5);a2.end();return a2;},_valueShapeBoundary:function(){var A=this;return{radius:15,type:"circle",stroke:{weight:7,color:"transparent"}};}}});ap.DiagramBuilder.types[ac]=ap.DiagramNodeState;ap.DiagramNodeCondition=ap.Component.create({NAME:C,ATTRS:{height:{value:60},type:{value:aS},width:{value:60}},EXTENDS:ap.DiagramNodeState,prototype:{hotPoints:r,renderShapeBoundary:function(){var A=this;var a2=A.boundary=A.get(aa).addShape(A.get(W));a2.translate(10,10);a2.rotate(45);a2.end();return a2;},_valueShapeBoundary:function(){var A=this;
return ap.DiagramNodeState.superclass._valueShapeBoundary.apply(A,arguments);}}});ap.DiagramBuilder.types[aS]=ap.DiagramNodeCondition;ap.DiagramNodeStart=ap.Component.create({NAME:C,ATTRS:{type:{value:ax}},EXTENDS:ap.DiagramNodeState});ap.DiagramBuilder.types[ax]=ap.DiagramNodeStart;ap.DiagramNodeEnd=ap.Component.create({NAME:C,ATTRS:{type:{value:aE}},EXTENDS:ap.DiagramNodeState});ap.DiagramBuilder.types[aE]=ap.DiagramNodeEnd;ap.DiagramNodeJoin=ap.Component.create({NAME:C,ATTRS:{height:{value:60},type:{value:t},width:{value:60}},EXTENDS:ap.DiagramNodeState,prototype:{hotPoints:r,renderShapeBoundary:function(){var A=this;return ap.DiagramNodeCondition.prototype.renderShapeBoundary.apply(A,arguments);},_valueShapeBoundary:function(){var A=this;return ap.DiagramNodeState.superclass._valueShapeBoundary.apply(A,arguments);}}});ap.DiagramBuilder.types[t]=ap.DiagramNodeJoin;ap.DiagramNodeFork=ap.Component.create({NAME:C,ATTRS:{height:{value:60},type:{value:ao},width:{value:60}},EXTENDS:ap.DiagramNodeState,prototype:{hotPoints:r,renderShapeBoundary:function(){var A=this;return ap.DiagramNodeCondition.prototype.renderShapeBoundary.apply(A,arguments);},_valueShapeBoundary:function(){var A=this;return ap.DiagramNodeState.superclass._valueShapeBoundary.apply(A,arguments);}}});ap.DiagramBuilder.types[ao]=ap.DiagramNodeFork;ap.DiagramNodeTask=ap.Component.create({NAME:C,ATTRS:{height:{value:70},type:{value:F},width:{value:70}},EXTENDS:ap.DiagramNodeState,prototype:{hotPoints:M,renderShapeBoundary:function(){var A=this;var a2=A.boundary=A.get(aa).addShape(A.get(W));a2.translate(8,8);a2.end();return a2;},_valueShapeBoundary:function(){var A=this;return{height:55,type:"rect",stroke:{weight:7,color:"transparent"},width:55};}}});ap.DiagramBuilder.types[F]=ap.DiagramNodeTask;},"@VERSION@",{requires:["aui-data-set","aui-diagram-builder-base","aui-diagram-builder-connector","overlay"],skinnable:true});AUI.add("aui-diagram-builder-connector",function(h){var N=h.Lang,r=N.isArray,u=N.isBoolean,C=N.isObject,f=N.isString,n=h.Array,L=function(A){return(A*A*A);},K=function(A){return(3*A*A*(1-A));},J=function(A){return(3*A*(1-A)*(1-A));},H=function(A){return((1-A)*(1-A)*(1-A));},k=function(R,Q,P,T,S){var A=Q[0]*L(R)+T[0]*K(R)+S[0]*J(R)+P[0]*H(R);var U=Q[1]*L(R)+T[1]*K(R)+S[1]*J(R)+P[1]*H(R);return[A,U];},E=function(A){return(A instanceof h.Graphic);},c=function(A){return A*180/Math.PI;},g=function(A){return A===0?0:(A<0?-1:1);},z="anchor",F="arrowPoints",O="builder",D="click",w="color",p="connector",s="diagramNode",y="fill",x="graphic",I="lazyDraw",b="mouseenter",i="mouseleave",v="name",m="p1",l="p2",d="path",t="selected",q="shape",a="shapeArrow",o="shapeArrowHover",G="shapeArrowSelected",B="shapeHover",j="shapeSelected",e="stroke",M="visible";h.PolygonUtil={ARROW_POINTS:[[-12,-6],[-8,0],[-12,6],[6,0]],drawArrow:function(Q,R,T,P,S,U){var A=this;var V=Math.atan2(S-T,P-R);Q.moveTo(P,S);P=P-5*Math.cos(V);S=S-5*Math.sin(V);A.drawPolygon(Q,A.translatePoints(A.rotatePoints(U||A.ARROW_POINTS,V),P,S));},drawPolygon:function(P,Q){var A=this;P.moveTo(Q[0][0],Q[0][1]);n.each(Q,function(S,R){if(R>0){P.lineTo(Q[R][0],Q[R][1]);}});P.lineTo(Q[0][0],Q[0][1]);},translatePoints:function(Q,P,S){var A=this;var R=[];n.each(Q,function(U,T){R.push([Q[T][0]+P,Q[T][1]+S]);});return R;},rotatePoints:function(P,R){var A=this;var Q=[];n.each(P,function(T,S){Q.push(A.rotatePoint(R,P[S][0],P[S][1]));});return Q;},rotatePoint:function(P,A,Q){return[(A*Math.cos(P))-(Q*Math.sin(P)),(A*Math.sin(P))+(Q*Math.cos(P))];}};h.Connector=h.Base.create("line",h.Base,[],{SERIALIZABLE_ATTRS:[w,I,v,j,B,m,l],shape:null,shapeArrow:null,initializer:function(Q){var A=this;var P=A.get(I);A.after({p1Change:A.draw,p2Change:A.draw,selectedChange:A._afterSelectedChange});A._initShapes();if(!P){A.draw();}A._uiSetSelected(A.get(t),!P);},destroy:function(){var A=this;A.shape.destroy();},draw:function(){var ah=this;var R=ah.shape;var A=ah.shapeArrow;var Q=ah.get(m),P=ah.get(l),ad=ah.getCoordinate(Q),ac=ah.getCoordinate(P),af=ad[0],T=ad[1],ae=ac[0],S=ac[1],Z=Math.max(Math.abs(af-ae)/2,10),X=Math.max(Math.abs(T-S)/2,10),W=null,Y=8,ag=c(Math.atan2(S-T,ae-af)),U=Math.round(Math.abs(ag)/(360/Y));if(g(ag)<0){W=[[af+Z,T,ae-Z,S,ae,S],[af+Z,T,ae,T-X,ae,S],[af,T-X,ae,T-X,ae,S],[af-Z,T,ae,T-X,ae,S],[af-Z,T,ae+Z,S,ae,S]];}else{W=[[af+Z,T,ae-Z,S,ae,S],[af+Z,T,ae,T+X,ae,S],[af,T+X,ae,T+X,ae,S],[af-Z,T,ae,T+X,ae,S],[af-Z,T,ae+Z,S,ae,S]];}var V=W[U];R.clear();R.moveTo(af,T);R.curveTo.apply(R,V);R.end();var ab=k(0,[af,T],[ae,S],[V[0],V[1]],[V[2],V[3]]),aa=k(0.025,[af,T],[ae,S],[V[0],V[1]],[V[2],V[3]]);A.clear();h.PolygonUtil.drawArrow(A,aa[0],aa[1],ab[0],ab[1],ah.get(F));A.end();return ah;},getCoordinate:function(Q){var A=this;var P=A.get(x).getXY();return[Q[0]-P[0],Q[1]-P[1]];},getProperties:function(){var A=this;var P=A.getPropertyModel();n.each(P,function(Q){Q.value=A.get(Q.attributeName);});return P;},getPropertyModel:function(){var P=this;var Q=P.get(z);var A=Q?Q.get(s).getStrings():{};return[{attributeName:v,editor:new h.TextCellEditor({validator:{rules:{value:{required:true}}}}),name:A[v]}];},hide:function(){var A=this;A.shape.set(M,false);A.shapeArrow.set(M,false);return A;},show:function(){var A=this;A.shape.set(M,true);A.shapeArrow.set(M,true);return A;},toJSON:function(){var A=this;var P={};n.each(A.SERIALIZABLE_ATTRS,function(Q){P[Q]=A.get(Q);});return P;},_afterSelectedChange:function(P){var A=this;A._uiSetSelected(P.newVal);},_initShapes:function(){var A=this;var P=A.shape=A.get(x).addShape(A.get(q));var Q=A.shapeArrow=A.get(x).addShape(A.get(a));P.on(D,h.bind(A._onShapeClick,A));P.on(b,h.bind(A._onShapeMouseEnter,A));P.on(i,h.bind(A._onShapeMouseLeave,A));Q.on(D,h.bind(A._onShapeClick,A));},_onShapeClick:function(R){var A=this;var P=A.get(O);var Q=A.get(t);if(P){if(R.hasModifier()){P.closeEditProperties();}else{P.unselectConnectors();if(Q){P.closeEditProperties();}else{P.editConnector(A);}}}A.set(t,!Q);},_onShapeMouseEnter:function(R){var A=this;if(!A.get(t)){var Q=A.get(B);var P=A.get(o);
if(Q){A._updateShape(A.shape,Q);}if(P){A._updateShape(A.shapeArrow,P);}}},_onShapeMouseLeave:function(P){var A=this;if(!A.get(t)){A._updateShape(A.shape,A.get(q));A._updateShape(A.shapeArrow,A.get(a));}},_setShape:function(P){var A=this;return h.merge({type:d,stroke:{color:A.get(w),weight:2,opacity:1}},P);},_setShapeArrow:function(P){var A=this;return h.merge({type:d,fill:{color:A.get(w),opacity:1},stroke:{color:A.get(w),weight:2,opacity:1}},P);},_uiSetSelected:function(Q,P){var A=this;A._updateShape(A.shape,Q?A.get(j):A.get(q),P);A._updateShape(A.shapeArrow,Q?A.get(G):A.get(a),P);},_updateShape:function(Q,R,P){var A=this;if(R.hasOwnProperty(y)){Q.set(y,R[y]);}if(R.hasOwnProperty(e)){Q.set(e,R[e]);}if(P!==false){A.draw();}}},{ATTRS:{arrowPoints:{value:h.PolygonUtil.ARROW_POINTS},builder:{},color:{value:"#27aae1",validator:f},graphic:{validator:E},lazyDraw:{value:false,validator:u},name:{valueFn:function(){var A=this;return p+(++h.Env._uidx);},validator:f},p1:{value:[0,0],validator:r},p2:{value:[0,0],validator:r},selected:{value:false,validator:u},shape:{value:null,setter:"_setShape"},shapeArrow:{value:null,setter:"_setShapeArrow"},shapeArrowHover:{value:{fill:{color:"#ffd700"},stroke:{color:"#ffd700",weight:5,opacity:0.8}}},shapeArrowSelected:{value:{fill:{color:"#ff6600"},stroke:{color:"#ff6600",weight:5,opacity:0.8}}},shapeHover:{value:{stroke:{color:"#ffd700",weight:5,opacity:0.8}}},shapeSelected:{value:{stroke:{color:"#ff6600",weight:5,opacity:0.8}}},transition:{value:{},validator:C},value:[0,0],validator:r},p2:{}});},"@VERSION@",{requires:["aui-base","arraylist-add","arraylist-filter","json","graphics","dd"],skinnable:true});AUI.add("aui-diagram-builder",function(a){},"@VERSION@",{use:["aui-diagram-builder-base","aui-diagram-builder-impl"],skinnable:true});