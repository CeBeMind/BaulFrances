w = window;
body = document.getElementsByTagName("body")[0];
Flag = document.getElementById("Flag");
flagColors = Flag.getElementsByTagName('span');
NavbarM = document.getElementById("Navbar");
MainpageM = document.getElementById("MainpageHeader");
LearnDivM = document.getElementById("MainpageLearnDiv");
HistDivM = document.getElementById("MainpageHistDiv");
HistPhraseM = document.getElementById("MainpageHistPhrase");
HistDivImages = HistDivM.getElementsByClassName("image");
GrammarDivM = document.getElementById("MainpageGrammarDiv");
GrammarDivText = GrammarDivM.getElementsByClassName("pers-text")[0];
ConnectDivM = document.getElementById("MainpageConnectDiv");
ConnectDivCircles = ConnectDivM.getElementsByTagName("span");

var last_scroll_position = w.pageYOffset+w.innerHeight, last_scroll_direction;

w.onscroll = function (){
	(last_scroll_position < w.pageYOffset+w.innerHeight) ? last_scroll_direction = 1 : last_scroll_direction = -1;
	last_scroll_position=w.pageYOffset+w.innerHeight;
};

//w.addEventListener("click",(e) => console.log(e));

/*
class scrollingObserver {
	constructor(els, cb, t, tMar, dir){
		this.elements = els;
		this.callback = cb;
		this.threshold = t;
		this.thresholdMargin = tMar;
		this.direction = dir;
		this.scrollTrack = w.addEventListener('scroll', (e) => this.watchOver() );
	};

	watchOver(){
	if (this.direction === last_scroll_direction){
		if (this.elements.length > 0){
			for (let i = 0; i < this.elements.length; i++){
				var el = this.elements[i];
				var elCoord = el.getBoundingClientRect();
				var triggerPos = el.offsetTop + (elCoord.height*this.threshold) + this.thresholdMargin;
				//var pagePos = w.pageYOffset + w.innerHeight;
				if(triggerPos > last_scroll_position-25 && triggerPos < last_scroll_position){
					this.callback(el, last_scroll_position);
				}
			}
		}
		else if (this.elements.id) {
			var elCoord = this.elements.getBoundingClientRect();
			var triggerPos = this.elements.offsetTop + (elCoord.height*this.threshold) + this.thresholdMargin;
			if(triggerPos > last_scroll_position-25 && triggerPos < last_scroll_position){
				this.callback(this.elements, last_scroll_position);
			}
		}
	}
	}
};
*/
/*
const hideFlag = new scrollingObserver(document.getElementById("MainpageHeader"), function(elem, pos){
	if (document.getElementsByTagName("span")[0].className.indexOf("goOut") === -1) {
		cols = document.getElementById("Flag").getElementsByTagName("span");
		
		setTimeout(function(){cols[0].classList.add("goOut");cols[0].classList.remove("goBack");},100);
		setTimeout(function(){cols[1].classList.add("goOut");cols[1].classList.remove("goBack");},300);
		setTimeout(function(){cols[2].classList.add("goOut");cols[2].classList.remove("goBack");},500);
		
		for (let i = 0; i < cols.length; i++) {
		setTimeout(function(){cols[i].classList.add("goOut");cols[i].classList.remove("goBack");},(i+1)*100+(i*100));	
		}
	}
}, 1, 30, 1);
const showFlag = new scrollingObserver(document.getElementById("MainpageHeader"), function(elem, pos){
	if (document.getElementsByTagName("span")[0].className.indexOf("goOut") != -1) {
		cols = document.getElementById("Flag").getElementsByTagName("span");
		
		setTimeout(function(){cols[0].classList.add("goBack");cols[0].classList.remove("goOut");},100);
		setTimeout(function(){cols[1].classList.add("goBack");cols[1].classList.remove("goOut");},300);
		setTimeout(function(){cols[2].classList.add("goBack");cols[2].classList.remove("goOut");},500);
		
		for (let i = 0; i < cols.length; i++) {
		setTimeout(function(){cols[i].classList.add("goBack");cols[i].classList.remove("goOut");},(i+1)*100+(i*100));	
		}
	}
}, 1, 0, -1);
*/
const flagChanger = new IntersectionObserver(function(entries, observer){
		
		for (entry of entries){
		for (let i = 0; i < flagColors.length; i++) {
			if(!entry.isIntersecting)
				setTimeout(function(){flagColors[i].classList.add("goOut");flagColors[i].classList.remove("goBack");},(i+1)*100+(i*100));	
			else if(entry.isIntersecting)
				setTimeout(function(){flagColors[i].classList.add("goBack");flagColors[i].classList.remove("goOut");},(i+1)*100+(i*100));	
		}
		}
}, { threshold: 0.7, rootMargin: "10px" });

flagChanger.observe(MainpageM);

const navbarChanger = new IntersectionObserver(function(entries, observer){
	for (entry of entries){
		if(entry.isIntersecting){
			NavbarM.classList.add("bg-blue-navy");
			NavbarM.classList.add("tx-white");
			for (let i = 0; i < NavbarM.getElementsByClassName("link").length; i++){
				NavbarM.getElementsByClassName("link")[i].classList.remove('tx-hv-line');
				NavbarM.getElementsByClassName("link")[i].classList.add('tx-hv-b1');
			}
			NavbarM.classList.remove("bg-transparent");
		} else if (!entry.isIntersecting){
			NavbarM.classList.remove("bg-blue-navy");
			NavbarM.classList.remove("tx-white");
			for (let i = 0; i < NavbarM.getElementsByClassName("link").length; i++) {
					NavbarM.getElementsByClassName("link")[i].classList.remove('tx-hv-b1');
					NavbarM.getElementsByClassName("link")[i].classList.add('tx-hv-line');
		}
			NavbarM.classList.add("bg-transparent");
		}
	}
}, {threshold: 0, rootMargin: "0px"});

navbarChanger.observe(MainpageM);

const toTop = new IntersectionObserver(function(entries, observer){
	for (entry of entries){
		if (entry.isIntersecting){
			var basis = entry.target.offsetTop;
			w.addEventListener('scroll', disappear);

			function disappear(){
				el = LearnDivM;
				if (el.offsetTop <= w.pageYOffset){
					el.getElementsByTagName("h3")[0].style.transform = `translateY(-${(w.pageYOffset - basis) / 4}px)`;
				}
			}
		}
		else if (!entry.isIntersecting){
				w.removeEventListener('scroll', disappear);
			}
	}
}, {threshold: 0.2, rootMargin: "0px"});

toTop.observe(LearnDivM);

const expandCircle = new IntersectionObserver(function(entries, observer){
	for (entry of entries){
		if (entry.isIntersecting){
			var basis = entry.target.offsetTop;
			var circle = LearnDivM.getElementsByTagName("span")[0];
			w.addEventListener('scroll',expand);
			function expand(){
				circle.style.transform = `scale(${(last_scroll_position - basis)/4.2})`;
			}
		} if (!entry.isIntersecting){
			w.removeEventListener('scroll',expand);
		}
	}
}, {threshold: 0, rootMargin:"0px"});
expandCircle.observe(LearnDivM);

const toBottom = new IntersectionObserver(function(entries, observer){
	for (entry of entries){
		if (entry.isIntersecting){
			var el = entry.target;
			var basis = entry.target.offsetTop;
			var size = el.getBoundingClientRect().height;
			var img = LearnDivM.getElementsByTagName("img")[0];
			w.addEventListener('scroll',toBottom);

			function toBottom (){
				var percent = (Math.floor((last_scroll_position-basis)/(size/100)));
				var expansion = 1 + (percent/100);
				if (percent < 100 && percent > 0)
					img.style.transform = `scale(${expansion})`;
			}
		} else if (!entry.isIntersecting) {
			w.removeEventListener('scroll', toBottom);
		}
	}
}, {threshold: 0, rootMargin: "0px"});

toBottom.observe(LearnDivM);

const appearText = new IntersectionObserver(function(entries, observer){
	for (entry of entries){
			var arr = "Aprende sobre todo lo relacionado con el francés";
			var string = entry.target.getElementsByClassName("pers-text")[0];
		if (entry.isIntersecting){
			var basis = entry.target.offsetTop;
			var size = entry.target.getBoundingClientRect().height;
			w.addEventListener('scroll', addLetters);

			function addLetters(){
				var percent = (Math.floor(((last_scroll_position-basis)*arr.length)/size));
				if (percent <= arr.length){
					string.innerHTML = arr.slice(0, percent);
				}
			}
		} else if (!entry.isIntersecting){
			string.innerHTML = arr;
			w.removeEventListener('scroll', addLetters);
		}
	}
}, {threshold: 0, rootMargin: "0px"});

appearText.observe(LearnDivM);

const showTextOnce = new IntersectionObserver(function(entries, observer){
	for (entry of entries){
		if (entry.isIntersecting){
			HistPhraseM.classList.add("showed");
			HistPhraseM.classList.remove("hidden");
			showTextOnce.unobserve(entry.target);
		}
	}
}, {threshold: 1, rootMargin: "30px"});

showTextOnce.observe(HistPhraseM);

const activeOnce = new IntersectionObserver(function(entries, observer){
	for (entry of entries){
		if (entry.isIntersecting) {
			for (let i = 0; i < HistDivImages.length; i++){
				setTimeout(function(){HistDivImages[i].classList.remove("inactive");},(i+1)*100+(i*150));
			}
			activeOnce.unobserve(HistDivM);
		}
	}
}, {threshold: 0.8, rootMargin: "0px"});

activeOnce.observe(HistDivM);

const textParallax = new IntersectionObserver(function(entries, observer){
	for (entry of entries){
		if (entry.isIntersecting){
			var basis = entry.target.offsetTop;
			w.addEventListener('scroll', moveText);
		} else if (entry.isIntersecting) {
			w.removeEventListener('scroll',moveText);
		}
		function moveText(){
			GrammarDivText.style.left = "calc(30vh - " + ((last_scroll_position-basis)/4) + "px)";
		}
	}
}, {threshold: 0, rootMargin: "0px"});

textParallax.observe(GrammarDivM);

const circlesParallax = new IntersectionObserver(function(entries, observer){
	for (entry of entries){
		if (entry.isIntersecting){
			var basis = entry.target.offsetTop
			w.addEventListener('scroll', moveCircles);
		} else if (!entry.isIntersecting){
			w.removeEventListener('scroll',moveCircles);
		}
		function moveCircles(){
			for (let i = 0; i < ConnectDivCircles.length; i++){
				ConnectDivCircles[i].style.left = "calc(50% - " + ((last_scroll_position-basis)/((i*1.02)+10)) + "%)";
				ConnectDivCircles[i].style.bottom = "calc(-100% + " + ((last_scroll_position-basis)/((i*1.02)+10)) + "%)";
			}
		}
	}
}, {threshold: 0, thresholdMargin: "0px"});

circlesParallax.observe(ConnectDivM);

/*
const changeNavbarToMinimal = new scrollingObserver(document.getElementById("MainpageHeader"), function(elem,pos){
	if (document.getElementById("Navbar").className.indexOf("bg-blue-navy") !== -1){
		document.getElementById("Navbar").classList.remove("bg-blue-navy");
		document.getElementById("Navbar").classList.remove("tx-white");
		document.getElementById("Navbar").classList.add("bg-transparent");
	}
}, 1, document.getElementById("MainpageHeader").getBoundingClientRect().height, 1);
const changeNavbarToNavy = new scrollingObserver(document.getElementById("MainpageHeader"), function(elem,pos){
	if (document.getElementById("Navbar").className.indexOf("bg-blue-navy") === -1){
		document.getElementById("Navbar").classList.remove("bg-transparent");
		document.getElementById("Navbar").classList.add("bg-blue-navy");
		document.getElementById("Navbar").classList.add("tx-white");
	}
}, 1, document.getElementById("MainpageHeader").getBoundingClientRect().height, -1);

const appearTextHistory = new scrollingObserver(document.getElementById("HistoryPhrase"), function(elem,pos){
	if (elem.className.indexOf("hidden") !== -1) {
		elem.classList.add("showed");
		elem.classList.remove("hidden");
	}
}, 1, 30, 1);

const elemObserver = new scrollingObserver(document.getElementsByClassName("try"), function(elem, pos){
	console.log("On 0.5, position the element" + elem.innerHTML);
}, 0.5, 0, 1);
*/