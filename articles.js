var articles=['<div class="gdocs"><iframe id="doc1" src="https://docs.google.com/document/d/e/2PACX-1vROs8jo8ACepxtUpzYKxQ8IFOIJOZggVsBreT7G9H4gVxQrzJwEJ5X-mVEY0t5014SWMizsbwAF8KBt/pub?embedded=true"></iframe></div>'+
/*format for articles:  			 */	'<div class="vids"><iframe style="width:100%;height:185px;" src="https://www.youtube.com/embed/mrHiJTzKvvo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+
/*each article is one item in array  */	'<iframe style="width:100%;height:185px;" src="https://www.youtube.com/embed/V7kUrfJid68" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+
/*<div class=gdocs> google doc iframe*/	'<iframe style="width:100%;height:185px;" src="https://www.youtube.com/embed/lmo5PSY6ylo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+ 
/*<div class=vids> all utube iframes */	'<iframe style="width:100%;height:185px;" src="https://www.youtube.com/embed/JjblK0f2EuM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'+
/*in table below, add				 */	'<iframe style="width:100%;height:185px;" src="https://www.youtube.com/embed/PHdBWPXwJTA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
/*showArticle(index) to link*/
/*any article from array    */	  '<div class="gdocs"><iframe id="doc2" src="https://docs.google.com/document/d/e/2PACX-1vTJR1meJliZqJ8qUwoMlry1MIw_kGuNSi7Qu9-WH184Q4khqU9QBpPD0aSz1mx3c_c_PfXl_QgcFsLa/pub?embedded=true"></iframe> </div>'+	
										'<div class="vids"> <iframe style="width:100%;height:185px;" src="https://www.youtube.com/embed/Qvyas0NOB2o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',

								  '<div class="gdocs"><iframe id="doc3" src="https://docs.google.com/document/d/e/2PACX-1vSs-slxrVTnd5mIt6lgCUwZGVPhXEa7R82LwrCvbGbaC8mhm0NjaFY5WRMM8gp7OaS1DKJ9TpZIVn7I/pub?embedded=true"></iframe></div>',
								  '<div class="gdocs"><iframe id="doc4" src="https://docs.google.com/document/d/e/2PACX-1vT2HvA9Jt0rWJ2qa3thV63yr-3P3Pc-_vb6VRmxpHKrHuMCsU5mm4_BWpNJ7AY8jAcwwam4Pt5fc94T/pub?embedded=true"></iframe></div>',
								  '<div class="gdocs"><iframe id="doc5" src="https://docs.google.com/document/d/e/2PACX-1vQjgnuI71NUnnlz3ydwnu-1om63NkbaCkxtibOPeh4I2CcCaSTgIyeRngA-GHcea1bowUcEExtqdpfg/pub?embedded=true"></iframe></div>'+
								  	'<div class="vids"> <iframe style="width:100%;height:185px;" src="https://www.youtube.com/embed/V7kUrfJid68" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
								  '<div class="gdocs"><iframe id="doc6" src="https://docs.google.com/document/d/e/2PACX-1vQjgnuI71NUnnlz3ydwnu-1om63NkbaCkxtibOPeh4I2CcCaSTgIyeRngA-GHcea1bowUcEExtqdpfg/pub?embedded=true"></iframe></div>'+
								  	'<div class="vids"> <iframe style="width:100%;height:185px;" src="https://www.youtube.com/embed/V7kUrfJid68" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
								  '<div class="gdocs"><iframe id="doc7" src="https://docs.google.com/document/d/e/2PACX-1vQjgnuI71NUnnlz3ydwnu-1om63NkbaCkxtibOPeh4I2CcCaSTgIyeRngA-GHcea1bowUcEExtqdpfg/pub?embedded=true"></iframe></div>'+
								  	'<div class="vids"> <iframe style="width:100%;height:185px;" src="https://www.youtube.com/embed/V7kUrfJid68" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
								  '<div class="gdocs"><iframe id="doc8" src="https://docs.google.com/document/d/e/2PACX-1vQjgnuI71NUnnlz3ydwnu-1om63NkbaCkxtibOPeh4I2CcCaSTgIyeRngA-GHcea1bowUcEExtqdpfg/pub?embedded=true"></iframe></div>'+
								  	'<div class="vids"> <iframe style="width:100%;height:185px;" src="https://www.youtube.com/embed/V7kUrfJid68" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>',
								  '<div class="gdocs"><iframe id="doc9" src="https://docs.google.com/document/d/e/2PACX-1vTJR1meJliZqJ8qUwoMlry1MIw_kGuNSi7Qu9-WH184Q4khqU9QBpPD0aSz1mx3c_c_PfXl_QgcFsLa/pub?embedded=true"></iframe></div>'+
									'<div class="vids">								  </div>',
								  '<div class="gdocs"><iframe id="doc10" src="https://docs.google.com/document/d/e/2PACX-1vTJR1meJliZqJ8qUwoMlry1MIw_kGuNSi7Qu9-WH184Q4khqU9QBpPD0aSz1mx3c_c_PfXl_QgcFsLa/pub?embedded=true"></iframe></div>'+
									'<div class="vids"></div>',
								  '<div class="gdocs"><iframe id="doc11" src="https://docs.google.com/document/d/e/2PACX-1vTJR1meJliZqJ8qUwoMlry1MIw_kGuNSi7Qu9-WH184Q4khqU9QBpPD0aSz1mx3c_c_PfXl_QgcFsLa/pub?embedded=true"></iframe></div>'+
									'<div class="vids"><iframe style="width:100%;height:185px;" src="https://www.youtube.com/embed/XmirFfWw6pM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'];