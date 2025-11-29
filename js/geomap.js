

    const geoKM=(geo)=>{
        if (!geo[0]) return 0;
        let homelat = 53.3788699741055;
        let homelon = 14.666091967286567;
        return haversineDistance(homelat, homelon, geo[0], geo[1]);
    }    


/**
 * Oblicza odległość ortodromiczną (w linii prostej) między dwoma punktami
 * na powierzchni Ziemi przy użyciu wzoru Haversine'a.
 *
 * @param {number} lat1 Szerokość geograficzna 1. punktu (w stopniach)
 * @param {number} lon1 Długość geograficzna 1. punktu (w stopniach)
 * @param {number} lat2 Szerokość geograficzna 2. punktu (w stopniach)
 * @param {number} lon2 Długość geograficzna 2. punktu (w stopniach)
 * @returns {number} Odległość w kilometrach
 */
function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Średni promień Ziemi w kilometrach

    // Funkcja pomocnicza do konwersji stopni na radiany
    const toRad = (angle) => (angle * Math.PI) / 180;

    // Różnica szerokości i długości geograficznej (w radianach)
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    // Szerokości geograficzne punktów w radianach
    const radLat1 = toRad(lat1);
    const radLat2 = toRad(lat2);

    // Zastosowanie wzoru Haversine'a
    const a = 
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // Odległość w km
    return distance;
}

// Przykładowe użycie: Odległość między Warszawą a Krakowem (przybliżone koordynaty)
/*const latWarszawa = 52.2297;
const lonWarszawa = 21.0122;
const latKrakow = 50.0647;
const lonKrakow = 19.9450;

const odleglosc = haversineDistance(latWarszawa, lonWarszawa, latKrakow, lonKrakow);*/

//console.log(`Odległość między Warszawą a Krakowem wynosi około: ${odleglosc.toFixed(2)} km`);












 
        const INITIAL_ZOOM = 15; // Poziom przybliżenia

        let mapa = null; // Zmienna do przechowywania instancji mapy

        const modal = document.getElementById('mapaModal');
        const span = document.getElementsByClassName('close-button')[0];
        const mapContainerId = 'mapaContainer';

        const inicjujMape=(lat,lon, shortName="Node",infomap="")=>{
            $("h5").textContent = "OpenMap, "+ infomap
            //console.log(lat,lon,mapa)
            // Inicjalizuj mapę tylko raz
            if (mapa === null) {
                mapa = L.map(mapContainerId).setView([lat, lon], INITIAL_ZOOM);
                //console.log(lat,lon,mapa)
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(mapa);

                // Dodaj opcjonalny marker
                L.marker([lat, lon]).addTo(mapa).bindPopup(shortName).openPopup();
            } else {
                // Jeśli mapa już istnieje, po prostu zmień jej widok
                L.marker([lat, lon]).addTo(mapa).bindPopup(shortName).openPopup();
                mapa.setView([lat, lon], INITIAL_ZOOM);
            }
            
            // WAŻNE: Wymuś przeliczenie rozmiaru mapy, gdy jest wyświetlona w modalu
            // Daje to pewność, że mapa poprawnie się wyrenderuje
            setTimeout(() => {
                 mapa.invalidateSize();
            }, 100); 
        }

    

        // Zamknij modal po kliknięciu na "x"
        if (span) span.onclick = function() {
            modal.style.display = "none";
        }

        // Zamknij modal po kliknięciu poza oknem
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

const getGeo=(ten,lat,lan)=>{
    if (ten) setActive(ten);
    let shortName = ten.title;
    let user = ten.dataset.user;
        //console.log("geo=",lat,lan,shortName,user,ten.dataset);
        //mapa = null;
        modal.style.display = "flex"; 
        inicjujMape(lat,lan,shortName,user);
    }
    
    
    
    
 
