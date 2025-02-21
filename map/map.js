var map = L.map('map').setView([42.7339, 25.4858], 7);
        
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var factories = [
    {
        name: "Литекс Моторс",
        location: "Ловеч",
        lat: 43.1347,
        lng: 24.7071,
        details: "Работи пълен монтажен завод за автомобили на Great Wall Motors (модели Voleex, Hover, Steed)."
    },
    {
        name: "SIN Карс",
        location: "Русе",
        lat: 43.85,
        lng: 25.97,
        details: "Домашен производител на суперкарове, произвеждащ SIN R1 и свързани високопроизводителни модели."
    },
    {
        name: "Кинетик Автомотив",
        location: "Варна",
        lat: 43.2141,
        lng: 27.9147,
        details: "Разработва и монтира електрически суперкарове и eGo картове с модерни задвижващи системи."
    },
    {
        name: "Завод за монтаж на Next.e.GO Mobile",
        location: "Ловеч",
        lat: 43.1347,
        lng: 24.7071,
        details: "Модерен завод, стартирал през 2023 г. за монтаж на електрически автомобили под марката e.GO Mobile."
    },
    {
        name: "Завод на Eberspächer България",
        location: "Русе",
        lat: 43.85,
        lng: 25.97,
        details: "Произвежда електрически отоплители за леки автомобили, подпомагащи производството на европейски OEM."
    },
    {
        name: "WITTE Automotive България ЕООД",
        location: "Русе",
        lat: 43.85,
        lng: 25.97,
        details: "Произвежда модерни заключващи и мехатронни системи за врати и интериори на превозни средства."
    },
    {
        name: "Kostal Bulgaria Automotive ЕООД",
        location: "Пазарджик",
        lat: 42.1167,
        lng: 24.3667,
        details: "Произвежда електронни системи и модули за автомобили за световни производители."
    },
    {
        name: "Sensata Technologies България ЕООД",
        location: "София",
        lat: 42.6977,
        lng: 23.3219,
        details: "Доставя високопрецизни сензори и системи за мониторинг за съвременни леки автомобили."
    },
    {
        name: "Yazaki България ЕООД",
        location: "Ямбол",
        lat: 42.4833,
        lng: 26.4833,
        details: "Произвежда електрически жични връзки и свързани системи за превозни средства."
    },
    {
        name: "Sumitomo Electric Bordnetze – България",
        location: "Карнобат",
        lat: 42.65587,
        lng: 26.9816,
        details: "Произвежда висококачествени жични връзки за широк спектър от автомобилни платформи."
    },
    {
        name: "Wurth Elektronik IBL BG",
        location: "Белозем",
        lat: 42.5667,
        lng: 24.0667,
        details: "Доставя електронни компоненти и сглобки, използвани в модерни автомобилни системи."
    },
    {
        name: "DECKER ООД",
        location: "Пловдив",
        lat: 42.1354,
        lng: 24.7453,
        details: "Работи в момента като завод за производство на прецизни компоненти за автомобилен монтаж."
    },
    {
        name: "TRAKIA AUTO ООД",
        location: "Пловдив",
        lat: 42.14,
        lng: 24.75,
        details: "Произвежда монтажни компоненти и модули, интегрирани в производствените линии на автомобили."
    },
    {
        name: "Voss Automotive България ЕООД",
        location: "Баховица (близо до Ловеч)",
        lat: 43.13,
        lng: 24.7,
        details: "Произвежда критични автомобилни компоненти, подпомагащи пълната монтажна операция на автомобили."
    },
    {
    name: "БАЛКАН АД",
    location: "Ловеч",
    lat: 43.1330,
    lng: 24.7100,
    details: "Нов завод, стартирал производство на електрически автомобили за e.GO Mobile от 2023 г."
    }
];
    
var customMarker = L.ExtraMarkers.icon({
    icon: 'fa-car',
    markerColor: '#afaa82',
    shape: 'circle',
    prefix: 'fa', 
    iconColor: '#ffffff',
    svg: true,
    extraClasses: 'custom-marker'
});

factories.forEach(factory => {
    var marker = L.marker([factory.lat, factory.lng], {icon: customMarker}).addTo(map);
    marker.bindPopup(`<h3>${factory.name}</h3><p>${factory.details}</p>`).openPopup();
});