jQuery(function(){window.lazyLoadInstance=new LazyLoad({elements_selector:"[data-src]",use_native:!0}),setTimeout(function(){var e=new RegExp("[?&]location_widget_acf=([^&#]*)").exec(window.location.href);e&&(jQuery("#title-prompt-text").hide(),jQuery('input[name="post_title"]').val("Campos personalizados - "+e[1]),jQuery("#acf_field_group-location-group_0-rule_0-param").val("widget_acf").change(),jQuery("#acf_field_group-location-group_0-rule_0-value").val(e[1]).change()),jQuery("#acf-group_widgets_all .acf-tab-group li span.aba_widgets_acf_delete").click(function(){if(confirm("Tem certeza que deseja excluir o widget ?")){var e=jQuery(this).closest("a").data("key").replace("field_aba_","").replaceAll("_","-");window.location.href=window.location.href+"&del="+e}}),jQuery(".external-field-save label.selected").click(function(){jQuery(this).closest("form").submit()}),jQuery("#acf-group_widgets_all .acf-code-external").length&&(jQuery(".aba_widgets_acf_delete_group_field").click(function(){if(confirm("Tem certeza que deseja excluir permanentemente o Grupo de campos ?")){var e=jQuery(this).data("group_id");window.location.href=window.location.href+"&del_group_field="+e}}),jQuery(".choices_fields_group .acf-input .option_group").click(function(){window.location.href=jQuery(this).parent().find("input").val()}),jQuery("#acf-group_widgets_all .acf-code-external .acf-tab-group li").click(function(){var e=jQuery(this).index(),t="application/x-httpd-php";if(0==e)t="css";else if(1==e)t="htmlmixed";else if(2==e)t="jsx";var a=wp.codeEditor.defaultSettings?_.clone(wp.codeEditor.defaultSettings):{};a.codemirror=_.extend({},a.codemirror,{theme:"monokai",tabSize:2,lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,autoCloseBrackets:!0,mode:t,indentWithTabs:!0});var i=jQuery(this).closest(".acf-code-external").find(".acf-field-textarea").eq(e);if(!i.find(".CodeMirror").length)wp.codeEditor.initialize(i.find("textarea"),a)}),jQuery("#acf-group_widgets_all .acf-tab-group").first().find("li").click(function(){var e=jQuery(this).index();jQuery("#acf-group_widgets_all .acf-code-external").eq(e).find(".acf-tab-group li.active").click()}),jQuery("#acf-group_widgets_all .acf-tab-group").first().find("li.active").click())},500)}),function(e){"undefined"!=typeof acf&&(window.modal={modals:[],open:function(t,a){var i=this;a=acf.parseArgs(a,{title:"",footer:!1,size:!1,destroy:!1,onOpen:!1,onClose:!1}),i.args=a,t.addClass("-open"),a.size&&t.addClass("-"+a.size),t.find("> .widgets-acf-modal-wrapper").length||t.wrapInner('<div class="widgets-acf-modal-wrapper" />'),t.find("> .widgets-acf-modal-wrapper > .widgets-acf-modal-content").length||t.find("> .widgets-acf-modal-wrapper").wrapInner('<div class="widgets-acf-modal-content" />'),t.find("> .widgets-acf-modal-wrapper").prepend('<div class="widgets-acf-modal-wrapper-overlay"></div><div class="widgets-acf-modal-title"><span class="title">'+a.title+'</span><button class="button button-primary button-close">Concluir</button></div>'),t.find(".widgets-acf-modal-title > .button-close").click(function(e){e.preventDefault(),i.close(a)}),a.footer&&(t.find("> .widgets-acf-modal-wrapper").append('<div class="widgets-acf-modal-footer"><button class="button button-primary">'+a.footer+"</button></div>"),t.find(".widgets-acf-modal-footer > button").click(function(e){e.preventDefault(),i.close(a)})),modal.modals.push(t);var n=e("body");if(!n.hasClass("widgets-acf-modal-opened")){var o=e('<div class="widgets-acf-modal-overlay" />');n.addClass("widgets-acf-modal-opened").append(o),n.find(".widgets-acf-modal-overlay").click(function(e){e.preventDefault(),i.close(i.args)}),e(window).keydown(function(t){27===t.keyCode&&e("body").hasClass("widgets-acf-modal-opened")&&(t.preventDefault(),i.close(i.args))})}return modal.multiple(),modal.onOpen(t,a),t},close:function(t){t=acf.parseArgs(t,{destroy:!1,onClose:!1});var a=modal.modals.pop();a.find(".widgets-acf-modal-wrapper-overlay").remove(),a.find(".widgets-acf-modal-title").remove(),a.find(".widgets-acf-modal-footer").remove(),a.removeAttr("style"),a.removeClass("-open"),t.destroy&&a.remove(),modal.modals.length||(e(".widgets-acf-modal-overlay").remove(),e("body").removeClass("widgets-acf-modal-opened")),modal.multiple(),modal.onClose(a,t)},multiple:function(){var t=modal.modals.length-1;e.each(modal.modals,function(a){t!=a?e(this).addClass("widgets-acf-modal-sub").css("margin-left",-500/(a+1)):e(this).removeClass("widgets-acf-modal-sub").css("margin-left","")})},onOpen:function(e,t){t.onOpen&&t.onOpen instanceof Function&&t.onOpen(e)},onClose:function(e,t){t.onClose&&t.onClose instanceof Function&&t.onClose(e)}})}(jQuery),function(e){if("undefined"!=typeof acf){var t=acf.getFieldType("flexible_content").prototype,a=[],i={};t.events["click .acf-fc-layout-handle"]="editLayoutTitleToggleHandle",t.editLayoutTitleToggleHandle=function(e,t){var a=t.closest(".layout");a.hasClass("widgets-acf-flexible-title-edition")&&a.find("> .acf-fc-layout-handle > .widgets-acf-layout-title > input.widgets-acf-flexible-control-title").trigger("blur")},t.events["mouseenter .acf-fc-layout-handle"]="layoutMouseOver",t.events["mouseenter .acf-fc-layout-controls"]="layoutMouseOver",t.layoutMouseOver=function(e,t){t.closest(".layout").addClass("layout--hover")},t.events["mouseleave .acf-fc-layout-handle"]="layoutMouseOut",t.events["mouseleave .acf-fc-layout-controls"]="layoutMouseOut",t.layoutMouseOut=function(e,t){t.closest(".layout").removeClass("layout--hover")},t.events["click .widgets-acf-layout-title-text"]="editLayoutTitle",t.editLayoutTitle=function(e,t){e.stopPropagation(),this.editLayoutTitleToggle(e,t)},t.events["blur input.widgets-acf-flexible-control-title"]="editLayoutTitleToggle",t.editLayoutTitleToggle=function(e,t){var a=t.closest(".layout"),i=a.find("> .acf-fc-layout-handle"),n=i.find(".widgets-acf-layout-title");if(a.hasClass("widgets-acf-flexible-title-edition")){""===(o=n.find("> input[data-widgets-acf-flexible-control-title-input]")).val()&&o.val(o.attr("placeholder")).trigger("input"),a.removeClass("widgets-acf-flexible-title-edition"),o.insertAfter(i)}else{var o=(o=a.find("> input[data-widgets-acf-flexible-control-title-input]")).appendTo(n);a.addClass("widgets-acf-flexible-title-edition"),o.focus().attr("size",o.val().length)}},t.events["click input.widgets-acf-flexible-control-title"]="editLayoutTitlePropagation",t.editLayoutTitlePropagation=function(e){e.stopPropagation()},t.events["input [data-widgets-acf-flexible-control-title-input]"]="editLayoutTitleInput",t.editLayoutTitleInput=function(e,t){var a=t.closest(".layout").find("> .acf-fc-layout-handle .widgets-acf-layout-title .widgets-acf-layout-title-text"),i=t.val();0!=i.length&&(t.attr("size",i.length),a.html(i))},t.events["keypress [data-widgets-acf-flexible-control-title-input]"]="editLayoutTitleInputEnter",t.editLayoutTitleInputEnter=function(e,t){13===e.keyCode&&(e.preventDefault(),t.blur())},t.events['click [data-action="widgets-acf-flexible-modal-edit"]']="modalEdit",t.modalEdit=function(e,a){var i=this,n=a.closest(".layout"),o=n.find("> .widgets-acf-modal.-fields"),l=n.find("> .acf-fc-layout-handle"),c=l.find("> .acf-fc-layout-order").outerHTML(),s=l.find(".widgets-acf-layout-title-text").text();modal.open(o,{title:c+" "+s,onOpen:function(){i.openLayout(n),t.setEditorInline(n)}})},t.events["click [data-widgets-acf-flexible-control-clone]"]="cloneLayout",t.cloneLayout=function(t,a){var i,n=a.closest(".layout"),o=n.data("layout"),l=e(this.$popup().html()),c=this.$layouts(),s=l.find('[data-layout="'+o+'"]').data("max")||0,r=(i=o,c.filter(function(){return e(this).data("layout")===i}).length);if(s&&r>=s)return a.addClass("disabled"),!1;a.removeClass("disabled"),this.fixInputs(n);var d=n.clone();this.cleanLayouts(d);var f=a.closest(".acf-flexible-content").find("> input[type=hidden]").attr("name");this.duplicate({layout:d,before:n,parent:f})},t.fixInputs=function(t){t.find("input").each(function(){e(this).attr("value",this.value)}),t.find("textarea").each(function(){e(this).html(this.value)}),t.find("input:radio,input:checkbox").each(function(){this.checked?e(this).attr("checked","checked"):e(this).attr("checked",!1)}),t.find("option").each(function(){this.selected?e(this).attr("selected","selected"):e(this).attr("selected",!1)})},t.cleanLayouts=function(t){t.find(".acf-editor-wrap").each(function(){var t=e(this);t.find(".wp-editor-container div").remove(),t.find(".wp-editor-container textarea").css("display","")}),t.find(".acf-date-picker").each(function(){e(this).find("input.input").removeClass("hasDatepicker").removeAttr("id")}),t.find(".acf-time-picker").each(function(){e(this).find("input.input").removeClass("hasDatepicker").removeAttr("id")}),t.find(".acf-date-time-picker").each(function(){e(this).find("input.input").removeClass("hasDatepicker").removeAttr("id")}),t.find(".widgets-acf-field-code-editor").each(function(){e(this).find(".CodeMirror").remove()}),t.find(".acf-color-picker").each(function(){var t=e(this),a=t.find("> input"),i=t.find(".wp-picker-container input.wp-color-picker").clone();a.after(i),t.find(".wp-picker-container").remove()}),t.find(".acf-field-post-object").each(function(){var t=e(this);t.find("> .acf-input span").remove(),t.find("> .acf-input select").removeAttr("tabindex aria-hidden").removeClass()}),t.find(".acf-field-page-link").each(function(){var t=e(this);t.find("> .acf-input span").remove(),t.find("> .acf-input select").removeAttr("tabindex aria-hidden").removeClass()}),t.find(".acf-field-select").each(function(){var t=e(this);t.find("> .acf-input span").remove(),t.find("> .acf-input select").removeAttr("tabindex aria-hidden").removeClass()}),t.find(".acf-field-font-awesome").each(function(){var t=e(this);t.find("> .acf-input span").remove(),t.find("> .acf-input select").removeAttr("tabindex aria-hidden")}),t.find(".acf-tab-wrap").each(function(){var t=e(this),a=t.closest(".acf-fields"),i=[];e.each(t.find("li a"),function(){i.push(e(this))}),a.find("> .acf-field-tab").each(function(){$current_tab=e(this),e.each(i,function(){var t=e(this);t.attr("data-key")===$current_tab.attr("data-key")&&$current_tab.find("> .acf-input").append(t)})}),t.remove()}),t.find(".acf-field-accordion").each(function(){var t=e(this);t.find("> .acf-accordion-title > .acf-accordion-icon").remove(),t.after('<div class="acf-field acf-field-accordion" data-type="accordion"><div class="acf-input"><div class="acf-fields" data-endpoint="1"></div></div></div>')})},t.duplicate=function(a){if(a=acf.parseArgs(a,{layout:"",before:!1,parent:!1,search:"",replace:""}),!this.allowAdd())return!1;var i=acf.uniqid();a.parent&&(a.search||(a.search=a.parent+"["+a.layout.attr("data-id")+"]"),a.replace=a.parent+"["+i+"]");var n={target:a.layout,search:a.search,replace:a.replace,append:this.proxy(function(e,t){t.addClass("widgets-acf-layout-duplicated"),t.attr("data-id",i),a.before?a.before.after(t):this.$layoutsWrap().append(t),acf.enable(t,this.cid),this.render()})};if(parseFloat(acf.get("acf_version"))<5.9)var o=acf.duplicate(n);else o=t.newAcfDuplicate(n);this.$input().trigger("change");var l=acf.getFields({type:"tab",parent:o});return l.length&&e.each(l,function(){this.$el.hasClass("acf-hidden")&&this.tab.$el.addClass("acf-hidden")}),o},t.newAcfDuplicate=function(e){e instanceof jQuery&&(e={target:e}),(e=acf.parseArgs(e,{target:!1,search:"",replace:"",rename:!0,before:function(e){},after:function(e,t){},append:function(e,t){e.after(t)}})).target=e.target||e.$el;var t=e.target;e.search=e.search||t.attr("data-id"),e.replace=e.replace||acf.uniqid(),e.before(t),acf.doAction("before_duplicate",t);var a=t.clone();return e.rename&&acf.rename({target:a,search:e.search,replace:e.replace,replacer:"function"==typeof e.rename?e.rename:null}),a.removeClass("acf-clone"),a.find(".ui-sortable").removeClass("ui-sortable"),a.find(".editor-initialized").removeClass("editor-initialized"),a.find(".widgets-acf-editor").parents(".wp-editor-wrap").first().remove(),e.after(t,a),acf.doAction("after_duplicate",t,a),e.append(t,a),acf.doAction("append",a),a},acf.add_action("append",function(a){a.parents("#acf-group_widgets_acf").length&&(a.find(".widgets-acf-preview").remove(),a.find(".editor-initialized").removeClass("editor-initialized"),a.find(".widgets-acf-editor").each(function(){e(this).parents(".wp-editor-wrap").first().remove()}),a.parents(".widgets-acf-modal-content").length&&t.setEditorInline(a))}),t.setEditorSettings=function(){var e=[],t="",n=[],o=[],l=new URL(window.location);for(let t=1;t<10;t++)e.push({title:t.toString()+"00",inline:"span",styles:{"font-weight":(100*t).toString()}});for(let e=.1;e<2.1;e+=.1)n.push({title:e.toFixed(1).toString(),inline:"span",styles:{"line-height":e.toFixed(1),display:"inline-block"}});for(let e=8;e<=100;e++)t+=e+"px ";for(let e=-10;e<=10;e++)o.push({title:e.toString()+"px",inline:"span",styles:{"letter-spacing":e.toString()+"px "}});if(i={tinymce:{wpautop:!1,forced_root_block:"",skin:"widgets-acf",skin_url:`${l.origin}/wp-content/plugins/widgets-acf/back-end/assets/tinymce/skins/widgets-acf`,formats:{alignleft:[{selector:"p, h1, h2, h3, h4, h5, h6, td, th, div, ul, ol, li, span",inline:"span",block:"span",styles:{display:"block",textAlign:"left"}}],aligncenter:[{selector:"p, h1, h2, h3, h4, h5, h6, td, th, div, ul, ol, li, span",inline:"span",block:"span",styles:{display:"block",textAlign:"center"}}],alignright:[{selector:"p, h1, h2, h3, h4, h5, h6, td, th, div, ul, ol, li, span",inline:"span",block:"span",styles:{display:"block",textAlign:"right"}}],alignfull:[{selector:"p, h1, h2, h3, h4, h5, h6, td, th, div, ul, ol, li, span",inline:"span",block:"span",styles:{display:"block",textAlign:"justify"}}],strikethrough:{inline:"del"}},style_formats:[{title:"Altura da linha",items:n},{title:"Espaçamento entre letras",items:o},{title:"Peso da fonte",items:e},{title:"Transformação",items:[{title:"Caixa alta",inline:"span",styles:{"text-transform":"uppercase",display:"inline-block"}},{title:"Caixa baixa",inline:"span",styles:{"text-transform":"lowercase",display:"inline-block"}},{title:"Capitalizada",inline:"span",styles:{"text-transform":"capitalize",display:"inline-block"}}]}],fontsize_formats:t.trim(),relative_urls:!1,remove_script_host:!1,convert_urls:!1,browser_spellcheck:!0,fix_list_elements:!1,entities:"38, amp, 60, lt, 62, gt",entity_encoding:"raw",keep_styles:!0,paste_webkit_styles:"font-weight font-style color",preview_styles:"font-family font-size font-weight font-style text-decoration text-transform",tabfocus_elements:": prev ,: next",plugins:"hr, media, paste, tabfocus, textcolor, fullscreen, wordpress, wpeditimage, wpgallery, wplink, wpdialogs, wpview, lists, colorpicker",resize:"vertical",menubar:!1,indent:!1,toolbar1:"forecolor backcolor, bold, italic, underline, strikethrough, subscript, superscript, removeformat, numlist, bullist, alignleft, aligncenter, alignjustify, alignright, link, unlink, hr, blockquote, fontsizeselect, styleselect",body_class:"id post-type-post-status-publish post-format-standard",wpeditimage_disable_captions:!1,wpeditimage_html5_captions:!0},quicktags:{buttons:"strong,em,link,close"},mediaButtons:!0},a.length>0){var c="";i.tinymce.font_formats="";for(var s=0;s<a.length;s++)i.tinymce.font_formats+=`${a[s]}=${a[s].toLowerCase()};`,c+=`${s>0?"&":""}family=${a[s]}:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900`;i.tinymce.content_style=`@import url('https://fonts.googleapis.com/css2?${c}&display=swap'); body { font-family: '${a[0]}'; }`}a.length>1&&(i.tinymce.toolbar1=i.tinymce.toolbar1.replace("fontsizeselect,","fontsizeselect, fontselect"))},t.setEditorInline=function(t){t.find('textarea:not(.editor-initialized):not(.widgets-acf-editor):not([readonly="readonly"]), input[type="text"]:not(.wp-color-picker):not(.widgets-acf-flexible-control-title):not(.editor-initialized):not([readonly="readonly"])').each(function(t){if(!e(this).closest(".acf-color-picker")[0]&&!e(this).closest(".acf-clone")[0]&&0===e(this).parents(".acf-relationship").length&&0===e(this).parents('[data-name="class"]').length&&0===e(this).parents(".no-inline-editor").length){var a=e(this);a.addClass("editor-initialized"),a.parent(".acf-input-wrap").css("overflow","visible");var n=e('<div class="widgets-acf-preview">'+a.val()+"</div>");n.appendTo(a.parent()),n.one("click",()=>{n.remove();var t=(new Date).getTime(),o="text"==a.attr("type"),l=e.extend(!0,{},i);e('<textarea id="'+t+'" class="widgets-acf-editor ckeditor_inline ckeditor_inline_input_text">'+a.val()+"</textarea>").appendTo(a.parent()),o&&(l.mediaButtons=!1,l.tinymce.toolbar1=l.tinymce.toolbar1.replace("numlist, bullist, ",""),l.tinymce.toolbar1=l.tinymce.toolbar1.replace("hr, blockquote, ","")),wp.editor.initialize(t,l),setTimeout(()=>a.parents(".acf-field").first().css("min-height","auto"),100),window.send_to_editor=function(e){tinyMCE.activeEditor.execCommand("mceInsertContent",!1,e)}})}})},e(document).on("tinymce-editor-setup",function(t,a){var i=e(a.targetElm);if(i.hasClass("widgets-acf-editor")){var n=i.parents(".wp-editor-wrap").first().prev();a.on("init",()=>a.focus()),a.on("change input",()=>n.val(a.getContent())),a.on("blur",()=>i.parent().find(".mce-top-part").hide()),a.on("focus",()=>i.parent().find(".mce-top-part").show())}}),t.modalSettings=function(a){var i=e(a.currentTarget),n=i.parents(".acf-row").find(".widgets-acf-modal.-settings"),o=i.attr("title");modal.open(n,{title:o,onOpen:function(){t.codeMirror(n)}})},t.codeMirror=function(t){t.find(".code-area:not(.code-editor-initialized)").each(function(){var t=e(this),a=wp.codeEditor.defaultSettings?_.clone(wp.codeEditor.defaultSettings):{};a.codemirror=_.extend({},a.codemirror,{theme:"monokai",tabSize:2,lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,autoCloseBrackets:!0,mode:"css",indentWithTabs:!0}),t.addClass("code-editor-initialized"),wp.codeEditor.initialize(t.find("textarea"),a)})},t.setAjaxFonts=function(){var i={async:!0,crossDomain:!0,url:window.location.href.split("/wp-admin")[0]+"/wp-admin/admin-ajax.php",method:"POST",headers:{"content-type":"application/x-www-form-urlencoded","cache-control":"no-cache"},data:{action:"fonts_widgets_acf"}};e.ajax(i).done(function(e){if(0!=e.length){for(var i=0;i<e.fonte.length;i++)a.push(e.fonte[i]);t.setEditorSettings()}})},t.search=function(t){var a=e(t.currentTarget).val().toUpperCase();e('[data-action="results"]').find("li").not(".search").each(function(t,i){var n=e(i);n.find("a").text().toUpperCase().indexOf(a)>-1?n.show():n.hide()})},acf.addAction("new_field/type=flexible_content",function(t){var a=t.$clones(),i=t.$layouts();e.merge(i,a);i.each(function(){var a=e(this),i=a.data("layout");acf.doAction("acfe/flexible/layouts",a,t),acf.doAction("acfe/flexible/layout/name="+i,a,t)}),1===a.length&&(t.removeEvents({'click [data-name="add-layout"]':"onClickAdd"}),t.addEvents({'click [data-name="add-layout"]':"acfeOneClick"})),t.addEvents({"click .acfe-fc-placeholder":"onClickCollapse"}),t.addEvents({"click .acfe-flexible-opened-actions > a":"onClickCollapse"}),t.add=function(t){var a=this;if(t=acf.parseArgs(t,{layout:"",before:!1}),!this.allowAdd())return!1;e.ajax({url:acf.get("ajaxurl"),data:acf.prepareForAjax({action:"widgets_acf/flexible/models",field_key:this.get("key"),layout:t.layout}),dataType:"html",type:"post",beforeSend:function(){e("body").addClass("-loading")},success:function(i){if(i){var n=e(i),o=acf.uniqid(),l="acf["+a.get("key")+"][acfcloneindex]",c=a.$control().find("> input[type=hidden]").attr("name")+"["+o+"]",s=acf.duplicate({target:n,search:l,replace:c,append:a.proxy(function(e,i){t.before?t.before.before(i):a.$layoutsWrap().append(i),acf.enable(i,a.cid),a.render()})});return s.attr("data-id",o),a.$input().trigger("change"),s}},complete:function(){e("body").removeClass("-loading"),window.lazyLoadInstance.update()}})}}),t.setAjaxFonts(),e(document).on("click",'[data-action="search"]',function(e){e.stopPropagation()}),e(document).on("input",'[data-action="search"]',t.search),e(document).on("click",'[data-event="settings-layout"]',t.modalSettings),e(document).on("click",'[data-name="add-layout"]',function(){setTimeout(()=>{window.lazyLoadInstance.update()},200)}),e(document).on("click",".widget-layout-horizontal input",function(){var t=e(this);t.closest("td.acf-fields").find(".values").attr("data-align-horizontal",t.val())}),e(document).on("click",".widget-layout-vertical input",function(){var t=e(this);t.closest("td.acf-fields").find(".values").attr("data-align-vertical",t.val())}),e(document).on("change",".grid-widget-settings--desktop select",function(){var t=e(this);t.closest(".layout").attr("data-columns-desktop",t.val())}),e(document).on("mouseenter",".grid-widget-settings",function(){t.layoutMouseOver(null,e(this))}),e(document).on("mouseleave",".grid-widget-settings",function(){t.layoutMouseOut(null,e(this))}),e(document).ready(()=>{e("#acf-group_widgets_acf").length&&e("#postdivrich").hide()})}}(jQuery);