const hamburgerButton = document.getElementById('hamburgerMenu');
const sidebarMenu = document.getElementById('sidebarMenu');

function toggleMenu()
{
	sidebarMenu.classList.toggle('open');
}

if(hamburgerButton && sidebarMenu)
{
	hamburgerButton.addEventListener('click', toggleMenu);
}

const pageContainer = document.querySelector('.page-container');

document.addEventListener('click', (event) => {
	const isClickInsideSidebar = sidebarMenu.contains(event.target);
	const isClickOnHamburger = hamburgerButton.contains(event.target);

	if(sidebarMenu.classList.contains('open') && !isClickInsideSidebar && !isClickOnHamburger)
	{
		toggleMenu();
	}
});

let christmasDate = new Date("12/25/2024");
christmasDate.setHours(0, 0, 0, 0);


let currentDate = new Date();
currentDate.setHours(0, 0, 0, 0);
let date1 = new Date("12/1/2024");
let date2 = new Date("12/2/2024");
let date3 = new Date("12/3/2024");
let date4 = new Date("12/4/2024");
let date5 = new Date("12/5/2024");
let date6 = new Date("12/6/2024");
let date7 = new Date("12/7/2024");
let date8 = new Date("12/8/2024");
let date9 = new Date("12/9/2024");
let date10 = new Date("12/10/2024");
let date11 = new Date("12/11/2024");
let date12 = new Date("12/12/2024");
let date13 = new Date("12/13/2024");
let date14 = new Date("12/14/2024");
let date15 = new Date("12/15/2024");
let date16 = new Date("12/16/2024");
let date17 = new Date("12/17/2024");
let date18 = new Date("12/18/2024");
let date19 = new Date("12/19/2024");
let date20 = new Date("12/20/2024");
let date21 = new Date("12/21/2024");
let date22 = new Date("12/22/2024");
let date23 = new Date("12/23/2024");
let date24 = new Date("12/24/2024");
let date25 = new Date("12/25/2024");

// Dictionary of "date" => "present id"
const dateIdMap = {
	"#present1": date1,
	"#present2": date2,
	"#present3": date3,
	"#present4": date4,
	"#present5": date5,
	"#present6": date6,
	"#present7": date7,
	"#present8": date8,
	"#present9": date9,
	"#present10": date10,
	"#present11": date11,
	"#present12": date12,
	"#present13": date13,
	"#present14": date14,
	"#present15": date15,
	"#present16": date16,
	"#present17": date17,
	"#present18": date18,
	"#present19": date19,
	"#present20": date20,
	"#present21": date21,
	"#present22": date22,
	"#present23": date23,
	"#present24": date24,
	"#present25": date25
};

const scrollToCurrentDayButton = document.getElementById('scrollToCurrentDay');
let currentDayElement = null;

// On page load, open all tiles whose dates are before today
// Show lock icon over tiles later than today
// Remove lock icon for today's tile, but do not open
Object.entries(dateIdMap).forEach(([doorID, dateVar]) => {
	const doorElement = document.querySelector(doorID);

	doorElement.addEventListener('click', () => {
		if(!doorElement.classList.contains('opened'))
		{
			doorElement.classList.add('opened');
		}
		else
		{
			doorElement.classList.remove('opened');
		}
	});
});

if(currentDayElement)
{
	scrollToCurrentDayButton.addEventListener('click', () => {
		currentDayElement.scrollIntoView({
			behavior: 'smooth',
			block: 'center'
		});
	});
}