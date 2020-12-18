jQuery(function(){window.lazyLoadInstance=new LazyLoad({elements_selector:"[data-src]",use_native:!0}),setTimeout(function(){var e=new RegExp("[?&]location_widget_acf=([^&#]*)").exec(window.location.href);e&&(jQuery("#title-prompt-text").hide(),jQuery('input[name="post_title"]').val("Campos personalizados - "+e[1]),jQuery("#acf_field_group-location-group_0-rule_0-param").val("widget_acf").change(),jQuery("#acf_field_group-location-group_0-rule_0-value").val(e[1]).change()),jQuery("#acf-group_widgets_all .acf-tab-group li span.aba_widgets_acf_delete").click(function(){if(confirm("Tem certeza que deseja excluir o widget ?")){var e=jQuery(this).closest("a").data("key").replace("field_aba_","").replaceAll("_","-");window.location.href=window.location.href+"&del="+e}}),jQuery(".external-field-save label.selected").click(function(){jQuery(this).closest("form").submit()}),jQuery("#acf-group_widgets_all .acf-code-external").length&&(jQuery(".aba_widgets_acf_delete_group_field").click(function(){if(confirm("Tem certeza que deseja excluir permanentemente o Grupo de campos ?")){var e=jQuery(this).data("group_id");window.location.href=window.location.href+"&del_group_field="+e}}),jQuery(".choices_fields_group .acf-input .option_group").click(function(){window.location.href=jQuery(this).parent().find("input").val()}),jQuery("#acf-group_widgets_all .acf-code-external .acf-tab-group li").click(function(){var e=jQuery(this).index(),t="application/x-httpd-php";if(0==e)t="css";else if(1==e)t="htmlmixed";else if(2==e)t="jsx";var a=wp.codeEditor.defaultSettings?_.clone(wp.codeEditor.defaultSettings):{};a.codemirror=_.extend({},a.codemirror,{theme:"monokai",tabSize:2,lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,autoCloseBrackets:!0,mode:t,indentWithTabs:!0});var i=jQuery(this).closest(".acf-code-external").find(".acf-field-textarea").eq(e);if(!i.find(".CodeMirror").length)wp.codeEditor.initialize(i.find("textarea"),a)}),jQuery("#acf-group_widgets_all .acf-tab-group").first().find("li").click(function(){var e=jQuery(this).index();jQuery("#acf-group_widgets_all .acf-code-external").eq(e).find(".acf-tab-group li.active").click()}),jQuery("#acf-group_widgets_all .acf-tab-group").first().find("li.active").click())},500)}),function(e){"undefined"!=typeof acf&&(window.modal={modals:[],open:function(t,a){var i=this;a=acf.parseArgs(a,{title:"",footer:!1,size:!1,destroy:!1,onOpen:!1,onClose:!1}),i.args=a,t.addClass("-open"),a.size&&t.addClass("-"+a.size),t.find("> .widgets-acf-modal-wrapper").length||t.wrapInner('<div class="widgets-acf-modal-wrapper" />'),t.find("> .widgets-acf-modal-wrapper > .widgets-acf-modal-content").length||t.find("> .widgets-acf-modal-wrapper").wrapInner('<div class="widgets-acf-modal-content" />'),t.find("> .widgets-acf-modal-wrapper").prepend('<div class="widgets-acf-modal-wrapper-overlay"></div><div class="widgets-acf-modal-title"><span class="title">'+a.title+'</span><button class="button button-primary button-close">Concluir</button></div>'),t.find(".widgets-acf-modal-title > .button-close").click(function(e){e.preventDefault(),i.close(a)}),a.footer&&(t.find("> .widgets-acf-modal-wrapper").append('<div class="widgets-acf-modal-footer"><button class="button button-primary">'+a.footer+"</button></div>"),t.find(".widgets-acf-modal-footer > button").click(function(e){e.preventDefault(),i.close(a)})),modal.modals.push(t);var n=e("body");if(!n.hasClass("widgets-acf-modal-opened")){var o=e('<div class="widgets-acf-modal-overlay" />');n.addClass("widgets-acf-modal-opened").append(o),n.find(".widgets-acf-modal-overlay").click(function(e){e.preventDefault(),i.close(i.args)}),e(window).keydown(function(t){27===t.keyCode&&e("body").hasClass("widgets-acf-modal-opened")&&(t.preventDefault(),i.close(i.args))})}return modal.multiple(),modal.onOpen(t,a),t},close:function(t){t=acf.parseArgs(t,{destroy:!1,onClose:!1});var a=modal.modals.pop();a.find(".widgets-acf-modal-wrapper-overlay").remove(),a.find(".widgets-acf-modal-title").remove(),a.find(".widgets-acf-modal-footer").remove(),a.removeAttr("style"),a.removeClass("-open"),t.destroy&&a.remove(),modal.modals.length||(e(".widgets-acf-modal-overlay").remove(),e("body").removeClass("widgets-acf-modal-opened")),modal.multiple(),modal.onClose(a,t)},multiple:function(){var t=modal.modals.length-1;e.each(modal.modals,function(a){t!=a?e(this).addClass("widgets-acf-modal-sub").css("margin-left",-500/(a+1)):e(this).removeClass("widgets-acf-modal-sub").css("margin-left","")})},onOpen:function(e,t){t.onOpen&&t.onOpen instanceof Function&&t.onOpen(e)},onClose:function(e,t){t.onClose&&t.onClose instanceof Function&&t.onClose(e)}})}(jQuery),function(e){if("undefined"!=typeof acf){CKEDITOR.disableAutoInline=!0,CKEDITOR.style.prototype.buildPreviewOriginal=CKEDITOR.style.prototype.buildPreview,CKEDITOR.style.prototype.buildPreview=function(e){var t,a=this.buildPreviewOriginal(e);return(t=/^(.*)font-size:(\d+)px(.*)$/.exec(a))&&(a=t[1]+"font-size: 12px"+t[3]),(t=/^(.*)line-height:(\d+)(.*)$/.exec(a))&&(a=t[1]+"line-height: 1"+t[3]),a};var t=acf.getFieldType("flexible_content").prototype;t.events["click .acf-fc-layout-handle"]="editLayoutTitleToggleHandle",t.editLayoutTitleToggleHandle=function(e,t){var a=t.closest(".layout");a.hasClass("widgets-acf-flexible-title-edition")&&a.find("> .acf-fc-layout-handle > .widgets-acf-layout-title > input.widgets-acf-flexible-control-title").trigger("blur")},t.events["mouseenter .acf-fc-layout-handle"]="layoutMouseOver",t.events["mouseenter .acf-fc-layout-controls"]="layoutMouseOver",t.layoutMouseOver=function(e,t){t.closest(".layout").addClass("layout--hover")},t.events["mouseleave .acf-fc-layout-handle"]="layoutMouseOut",t.events["mouseleave .acf-fc-layout-controls"]="layoutMouseOut",t.layoutMouseOut=function(e,t){t.closest(".layout").removeClass("layout--hover")},t.events["click .widgets-acf-layout-title-text"]="editLayoutTitle",t.editLayoutTitle=function(e,t){e.stopPropagation(),this.editLayoutTitleToggle(e,t)},t.events["blur input.widgets-acf-flexible-control-title"]="editLayoutTitleToggle",t.editLayoutTitleToggle=function(e,t){var a=t.closest(".layout"),i=a.find("> .acf-fc-layout-handle"),n=i.find(".widgets-acf-layout-title");if(a.hasClass("widgets-acf-flexible-title-edition")){""===(o=n.find("> input[data-widgets-acf-flexible-control-title-input]")).val()&&o.val(o.attr("placeholder")).trigger("input"),a.removeClass("widgets-acf-flexible-title-edition"),o.insertAfter(i)}else{var o=(o=a.find("> input[data-widgets-acf-flexible-control-title-input]")).appendTo(n);a.addClass("widgets-acf-flexible-title-edition"),o.focus().attr("size",o.val().length)}},t.events["click input.widgets-acf-flexible-control-title"]="editLayoutTitlePropagation",t.editLayoutTitlePropagation=function(e){e.stopPropagation()},t.events["input [data-widgets-acf-flexible-control-title-input]"]="editLayoutTitleInput",t.editLayoutTitleInput=function(e,t){var a=t.closest(".layout").find("> .acf-fc-layout-handle .widgets-acf-layout-title .widgets-acf-layout-title-text"),i=t.val();0!=i.length&&(t.attr("size",i.length),a.html(i))},t.events["keypress [data-widgets-acf-flexible-control-title-input]"]="editLayoutTitleInputEnter",t.editLayoutTitleInputEnter=function(e,t){13===e.keyCode&&(e.preventDefault(),t.blur())},t.events['click [data-action="widgets-acf-flexible-modal-edit"]']="modalEdit",t.modalEdit=function(e,a){var i=this,n=a.closest(".layout"),o=n.find("> .widgets-acf-modal.-fields"),l=n.find("> .acf-fc-layout-handle"),c=l.find("> .acf-fc-layout-order").outerHTML(),d=l.find(".widgets-acf-layout-title-text").text();modal.open(o,{title:c+" "+d,onOpen:function(){i.openLayout(n),t.setCkeditorInline(n)}})},t.events["click [data-widgets-acf-flexible-control-clone]"]="cloneLayout",t.cloneLayout=function(t,a){var i,n=a.closest(".layout"),o=n.data("layout"),l=e(this.$popup().html()),c=this.$layouts(),d=l.find('[data-layout="'+o+'"]').data("max")||0,r=(i=o,c.filter(function(){return e(this).data("layout")===i}).length);if(d&&r>=d)return a.addClass("disabled"),!1;a.removeClass("disabled"),this.fixInputs(n);var s=n.clone();this.cleanLayouts(s);var f=a.closest(".acf-flexible-content").find("> input[type=hidden]").attr("name");this.duplicate({layout:s,before:n,parent:f})},t.fixInputs=function(t){t.find("input").each(function(){e(this).attr("value",this.value)}),t.find("textarea").each(function(){e(this).html(this.value)}),t.find("input:radio,input:checkbox").each(function(){this.checked?e(this).attr("checked","checked"):e(this).attr("checked",!1)}),t.find("option").each(function(){this.selected?e(this).attr("selected","selected"):e(this).attr("selected",!1)})},t.cleanLayouts=function(t){t.find(".acf-editor-wrap").each(function(){var t=e(this);t.find(".wp-editor-container div").remove(),t.find(".wp-editor-container textarea").css("display","")}),t.find(".acf-date-picker").each(function(){e(this).find("input.input").removeClass("hasDatepicker").removeAttr("id")}),t.find(".acf-time-picker").each(function(){e(this).find("input.input").removeClass("hasDatepicker").removeAttr("id")}),t.find(".acf-date-time-picker").each(function(){e(this).find("input.input").removeClass("hasDatepicker").removeAttr("id")}),t.find(".widgets-acf-field-code-editor").each(function(){e(this).find(".CodeMirror").remove()}),t.find(".acf-color-picker").each(function(){var t=e(this),a=t.find("> input"),i=t.find(".wp-picker-container input.wp-color-picker").clone();a.after(i),t.find(".wp-picker-container").remove()}),t.find(".acf-field-post-object").each(function(){var t=e(this);t.find("> .acf-input span").remove(),t.find("> .acf-input select").removeAttr("tabindex aria-hidden").removeClass()}),t.find(".acf-field-page-link").each(function(){var t=e(this);t.find("> .acf-input span").remove(),t.find("> .acf-input select").removeAttr("tabindex aria-hidden").removeClass()}),t.find(".acf-field-select").each(function(){var t=e(this);t.find("> .acf-input span").remove(),t.find("> .acf-input select").removeAttr("tabindex aria-hidden").removeClass()}),t.find(".acf-field-font-awesome").each(function(){var t=e(this);t.find("> .acf-input span").remove(),t.find("> .acf-input select").removeAttr("tabindex aria-hidden")}),t.find(".acf-tab-wrap").each(function(){var t=e(this),a=t.closest(".acf-fields"),i=[];e.each(t.find("li a"),function(){i.push(e(this))}),a.find("> .acf-field-tab").each(function(){$current_tab=e(this),e.each(i,function(){var t=e(this);t.attr("data-key")===$current_tab.attr("data-key")&&$current_tab.find("> .acf-input").append(t)})}),t.remove()}),t.find(".acf-field-accordion").each(function(){var t=e(this);t.find("> .acf-accordion-title > .acf-accordion-icon").remove(),t.after('<div class="acf-field acf-field-accordion" data-type="accordion"><div class="acf-input"><div class="acf-fields" data-endpoint="1"></div></div></div>')})},t.duplicate=function(a){if(a=acf.parseArgs(a,{layout:"",before:!1,parent:!1,search:"",replace:""}),!this.allowAdd())return!1;var i=acf.uniqid();a.parent&&(a.search||(a.search=a.parent+"["+a.layout.attr("data-id")+"]"),a.replace=a.parent+"["+i+"]");var n={target:a.layout,search:a.search,replace:a.replace,append:this.proxy(function(e,t){t.addClass("widgets-acf-layout-duplicated"),t.attr("data-id",i),a.before?a.before.after(t):this.$layoutsWrap().append(t),acf.enable(t,this.cid),this.render()})};if(parseFloat(acf.get("acf_version"))<5.9)var o=acf.duplicate(n);else o=t.newAcfDuplicate(n);this.$input().trigger("change");var l=acf.getFields({type:"tab",parent:o});return l.length&&e.each(l,function(){this.$el.hasClass("acf-hidden")&&this.tab.$el.addClass("acf-hidden")}),o},t.newAcfDuplicate=function(e){e instanceof jQuery&&(e={target:e}),(e=acf.parseArgs(e,{target:!1,search:"",replace:"",rename:!0,before:function(e){},after:function(e,t){},append:function(e,t){e.after(t)}})).target=e.target||e.$el;var t=e.target;e.search=e.search||t.attr("data-id"),e.replace=e.replace||acf.uniqid(),e.before(t),acf.doAction("before_duplicate",t);var a=t.clone();return e.rename&&acf.rename({target:a,search:e.search,replace:e.replace,replacer:"function"==typeof e.rename?e.rename:null}),a.removeClass("acf-clone"),a.find(".ui-sortable").removeClass("ui-sortable"),e.after(t,a),acf.doAction("after_duplicate",t,a),e.append(t,a),acf.doAction("append",a),a},acf.add_action("append",function(a){a.parents(".widgets-acf-modal-content").length&&(a.find('textarea:not(.editor-initialized), input[type="text"]:not(.wp-color-picker):not(.widgets-acf-flexible-control-title)').each(function(){var t=e(this);t.removeClass("editor-initialized"),t.next(".ckeditor_inline").remove()}),t.setCkeditorInline(a))}),t.setCkeditorInline=function(t){var a=[],i="";for(let e=1;e<10;e++)a.push({name:e+"00",element:"font",styles:{"font-weight":100*e}});for(let e=8;e<101;e++)i+=e+"px;";var n=[{name:"document",groups:["mode"]},{name:"basicstyles",groups:["colors","basicstyles","cleanup"]},{name:"list",groups:["list","align"]},{name:"links",groups:["links"]},"/",{name:"styles",groups:["styles"]},{name:"others",groups:["others"]}],o=[{name:"document",groups:["mode"]},{name:"basicstyles",groups:["colors","basicstyles","cleanup"]},{name:"list",groups:["list","align"]},{name:"links",groups:["links"]},{name:"insert",groups:["insert","blocks"]},"/",{name:"styles",groups:["styles"]},{name:"others",groups:["others"]}];t.find('textarea:not(.editor-initialized):not([readonly="readonly"]), input[type="text"]:not(.wp-color-picker):not(.widgets-acf-flexible-control-title):not(.editor-initialized):not([readonly="readonly"])').each(function(){if(!e(this).closest(".acf-color-picker")[0]&&!e(this).closest(".acf-clone")[0]&&0===e(this).parents(".acf-relationship").length&&0===e(this).parents('[data-name="class"]').length&&0===e(this).parents(".no-inline-editor").length){var t,l=e(this),c=l.attr("name")+(new Date).getTime(),d="text"==l.attr("type");l.addClass("editor-initialized"),e('<div id="'+c+'" class="ckeditor_inline ckeditor_inline_input_text" contenteditable="true" >'+l.val()+"</div>").appendTo(l.parent()),CKEDITOR.disableAutoInline=!0,CKEDITOR.config.allowedContent=!0,(t=CKEDITOR.inline(c,{enterMode:CKEDITOR.ENTER_BR,autoParagraph:!0,forcePasteAsPlainText:!0,font_names:"",fontSize_sizes:i,toolbarGroups:d?n:o,stylesSet:a})).on("change",function(){l.val(t.getData())})}})},t.modalSettings=function(a){var i=e(a.currentTarget),n=i.parents(".acf-row").find(".widgets-acf-modal.-settings"),o=i.attr("title");modal.open(n,{title:o,onOpen:function(){t.codeMirror(n)}})},t.codeMirror=function(t){t.find(".code-area:not(.code-editor-initialized)").each(function(){var t=e(this),a=wp.codeEditor.defaultSettings?_.clone(wp.codeEditor.defaultSettings):{};a.codemirror=_.extend({},a.codemirror,{theme:"monokai",tabSize:2,lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,autoCloseBrackets:!0,mode:"css",indentWithTabs:!0}),t.addClass("code-editor-initialized"),wp.codeEditor.initialize(t.find("textarea"),a)})},t.setAjaxFonts=function(){var e={async:!0,crossDomain:!0,url:window.location.href.split("/wp-admin")[0]+"/wp-admin/admin-ajax.php",method:"POST",headers:{"content-type":"application/x-www-form-urlencoded","cache-control":"no-cache"},data:{action:"fonts_widgets_acf"}},t="";jQuery.ajax(e).done(function(e){if(0!=e.length){for(var a=0;a<e.fonte.length;a++)t=e.fonte[a]+";"+t;for(var i=0;i<e.weights.length;i++){for(var n in e.weights[i])jQuery("body").append('<input type="hidden" id="fontsweight_selected_widget_acf_'+n+'" value="'+e.weights[i][n]+'" />'),0}e.fonte||(t="Arial;"),jQuery("body").append('<input type="hidden" id="fonts_selected_widget_acf" value="'+t+'" />');var o="".split(";");for(a=0;a<o.length-1;a++){var l=jQuery("#fontsweight_selected_widget_acf_"+""[a].replace(" ","_")).val().split(";"),c=[],d={100:"Thin 100","100italic":"Thin 100 Italic",200:"Thin 200","200italic":"Thin 200 Italic",300:"Thin 300","300italic":"Thin 300 Italic",regular:"Regular",italic:"Italic",400:"Regular 400","400italic":"Regular 400 Italic",500:"Medium 500","500italic":"Medium 500 Italic",600:"Semi-bold 600","600italic":"Semi-bold 600 Italic",700:"Bold 700","700italic":"Bold 700 Italic",800:"Bold 800","800italic":"Bold 800 Italic",900:"Bold 900","900italic":"Bold 900 Italic"};for(i=0;i<l.length;i++)c.push({name:d[l[i]],element:"font",styles:{"font-weight":l[i]}});c&&CKEDITOR.stylesSet.add("my_styles_"+o[a].replace(" ","_"),c)}}})},t.search=function(t){var a=e(t.currentTarget).val().toUpperCase();e('[data-action="results"]').find("li").not(".search").each(function(t,i){var n=e(i);n.find("a").text().toUpperCase().indexOf(a)>-1?n.show():n.hide()})},t.setAjaxFonts(),e(document).on("click",'[data-action="search"]',function(e){e.stopPropagation()}),e(document).on("input",'[data-action="search"]',t.search),e(document).on("click",'[data-event="settings-layout"]',t.modalSettings),e(document).on("click",'[data-name="add-layout"]',function(){setTimeout(()=>{window.lazyLoadInstance.update()},200)}),e(document).on("click",".widget-layout-horizontal input",function(){var t=e(this);t.closest("td.acf-fields").find(".values").attr("data-align-horizontal",t.val())}),e(document).on("click",".widget-layout-vertical input",function(){var t=e(this);t.closest("td.acf-fields").find(".values").attr("data-align-vertical",t.val())}),e(document).on("change",".grid-widget-settings--desktop select",function(){var t=e(this);t.closest(".layout").attr("data-columns-desktop",t.val())}),e(document).on("mouseenter",".grid-widget-settings",function(){t.layoutMouseOver(null,e(this))}),e(document).on("mouseleave",".grid-widget-settings",function(){t.layoutMouseOut(null,e(this))})}}(jQuery);