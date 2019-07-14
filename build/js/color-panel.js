// Theme Panel Open/Close
$("#theme-panel .panel-button").click(function(){$("#theme-panel").toggleClass("close-theme-panel","open-theme-panel",1000);$("#theme-panel").toggleClass("open-theme-panel","close-theme-panel",1000);return false;});$('.switcher').click(function(){var title=jQuery(this).attr('title');jQuery('#changeable-colors').attr('href','css/color-schemes/'+title+'.css');$('.canvas-color').each(function(){var loadfunction;loadfunction=$(this).data('load');div_id=this.id;if(loadfunction=="drawcolor"){if($(this).data('action')!="nocolorchange"){if(title=="asphalt"){if($(this).data('brcolor')!=''){var brcolor='#5e6f80';}
if($(this).data('iconcolor')!=''){var iconcolor='#5e6f80';}}
if(title=="blue"){if($(this).data('brcolor')!=''){var brcolor='#3598DB';}
if($(this).data('iconcolor')!=''){var iconcolor='#3598DB';}}
if(title=="gray"){if($(this).data('brcolor')!=''){var brcolor='#95a5a6';}
if($(this).data('iconcolor')!=''){var iconcolor='#95a5a6';}}
if(title=="green"){if($(this).data('brcolor')!=''){var brcolor='#73B819';}
if($(this).data('iconcolor')!=''){var iconcolor='#73B819';}}
if(title=="orange"){if($(this).data('brcolor')!=''){var brcolor='#f06739';}
if($(this).data('iconcolor')!=''){var iconcolor='#f06739';}}
if(title=="purple"){if($(this).data('brcolor')!=''){var brcolor='#8573CD';}
if($(this).data('iconcolor')!=''){var iconcolor='#8573CD';}}
if(title=="red"){if($(this).data('brcolor')!=''){var brcolor='#E74C3C';}
if($(this).data('iconcolor')!=''){var iconcolor='#E74C3C';}}
if(title=="s-blue"){if($(this).data('brcolor')!=''){var brcolor='#1ed2ff';}
if($(this).data('iconcolor')!=''){var iconcolor='#1ed2ff';}}
if(title=="s-green"){if($(this).data('brcolor')!=''){var brcolor='#90c963';}
if($(this).data('iconcolor')!=''){var iconcolor='#90c963';}}
if(title=="yellow"){if($(this).data('brcolor')!=''){var brcolor='#ffc400';}
if($(this).data('iconcolor')!=''){var iconcolor='#f1dd00';}}
window[loadfunction](div_id,$(this).data('width'),$(this).data('height'),$(this).data('color'),$(this).data('hvcolor'),brcolor,$(this).data('border'),$(this).data('brhvcolor'),$(this).data('icon'),$(this).data('iconsize'),iconcolor,$(this).data('container'),$(this).data('animate'),600);}
if($(this).data('type')=="about"){if(title=="asphalt"){if($(this).data('color')!=''){var color='#5e6f80';}}
if(title=="blue"){if($(this).data('color')!=''){var color='#3598DB';}}
if(title=="gray"){if($(this).data('color')!=''){var color='#95a5a6';}}
if(title=="green"){if($(this).data('color')!=''){var color='#73B819';}}
if(title=="orange"){if($(this).data('color')!=''){var color='#f06739';}}
if(title=="purple"){if($(this).data('color')!=''){var color='#8573CD';}}
if(title=="red"){if($(this).data('color')!=''){var color='#E74C3C';}}
if(title=="s-green"){if($(this).data('color')!=''){var color='#90c963';}}
if(title=="yellow"){if($(this).data('color')!=''){var color='#ffc400';}}
window[loadfunction](div_id,$(this).data('width'),$(this).data('height'),color,$(this).data('hvcolor'),$(this).data('brcolor'),$(this).data('border'),$(this).data('brhvcolor'),$(this).data('icon'),$(this).data('iconsize'),$(this).data('iconcolor'),$(this).data('container'),$(this).data('animate'),600);}}});$('.canvas-logo').each(function(){var loadlogofunction;loadlogofunction=$(this).data('load');div_img_id=this.id;if(loadlogofunction=="drawlogo"){if($(this).data('hvimg')!=''){var sources={darthVader:$(this).data('img'),yoda:$(this).data('hvimg')};}else{var sources={darthVader:$(this).data('img'),};}
var width=$(this).data('width');var height=$(this).data('height');var brcolor=$(this).data('brcolor');var border=$(this).data('border');if(title=="asphalt"){if($(this).data('color')!=''){var color='#5e6f80';}}
if(title=="blue"){if($(this).data('color')!=''){var color='#3598DB';}}
if(title=="gray"){if($(this).data('color')!=''){var color='#95a5a6';}}
if(title=="green"){if($(this).data('color')!=''){var color='#73B819';}}
if(title=="orange"){if($(this).data('color')!=''){var color='#f06739';}}
if(title=="purple"){if($(this).data('color')!=''){var color='#8573CD';}}
if(title=="red"){if($(this).data('color')!=''){var color='#E74C3C';}}
if(title=="s-green"){if($(this).data('color')!=''){var color='#90c963';}}
if(title=="yellow"){if($(this).data('color')!=''){var color='#ffc400';}}
loadlogoImages(sources,drawlogo,div_img_id,width,height,color,brcolor,border);}});return false;});