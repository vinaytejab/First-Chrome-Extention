
//keywords to block on web
kw = ['killed','Shit','Piss off','Asshole','Muder','hate speech','bitch','bastard','bloody hell']
tags = "SPANEMBIULOLI";
total = 0;

//parsing to the opened page on by on 
//has a function defined hide which it execuets if keyword is found

for(var ii = 0; ii < kw.length; ii++)
{
	o = $(`:contains(${kw[ii]}):not(:has(:contains(${kw[ii]})))`)
	for(var i = 0; i < o.length; i++)
	{
		if (!o[i].parentNode || o[i].parentNode.nodeName === "BODY") {
          continue;
        }
		hide(o[i]);
		total++;
	}
}

if(total >= 10) {
	headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
	for(var i = 0; i < headings.length; i++) hideNode(headings[i]);
}
//function to block when a keyword and blur's pics found on the page 
function hide(node) {
	ancestor = node.parentNode;
	if(ancestor != null) {
		if (ancestor.parentNode != null 
				&& ancestor.tagName != 'BODY')
				ancestor = ancestor.parentNode;	
		imgs = ancestor.getElementsByTagName('img');
		for(var i = 0; i < imgs.length; i++) 
			imgs[i].style.webkitFilter = "blur(10px)"
		lists = ancestor.getElementsByTagName('li');
		for(var i = 0; i < lists.length; i++) hideNode(lists[i]);
	}

	if (node == null || node.parentNode == null) return;
	all_child = node.parentNode.children;
	for(var i = 0; i < all_child; i++) {
		var type = all_child[i].tagName;
		if (tags.match(type) != null) hideNode(all_child[i]);
	}
	hideNode(node);
}

function hideNode(node) {
	node.textContent = '[TEXT BLOCKED: OFFENSIVE LANG DETECTED]';
	node.style.color = 'red'
}
