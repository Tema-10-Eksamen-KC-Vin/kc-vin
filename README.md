# Teknisk dokumentation for Tema 10 Eksamen gruppeprojekt

# Projektstruktur:

Projektet struktureres i overenstemmelse med Astros filstruktur. Alle komponenter, pages, layouts, assets, styles og scripts skal ligge i tilsvarende mappe i src/

src/assets - billede- og videomateriale
src/styles - Global CSS-fil
src/scripts - JavaScript filer
src/components - Komponenter til website
src/pages - Alle pages til site strukturen
src/layouts - layout filer til websitet

# Astro

Vi har valgt at bruge Astro da er ideelt til dynamiske hjemmesider og er bæredygtigt da sider som standard leveres som statisk HTML og kun indlæser det som er nødvendigt.

vi har brugt kommandoerne "npm install" til installation og "npm run dev" til udvikling af hjemmesiden

# Navngivning:

Beslutte hvordan i vil navngive filer og mapper for at sikre en ensartet struktur og undgå forvirring.

Hvordan navngiver I filnavne? (fx små bogstaver, ingen mellemrum, brug af - eller \_) fx. produkt.html, produkt.css & produkt.js (små bogstaver, ingen mellemrum)

Komponents med stort forbogstav
Pages kun med lower case

Hvordan sikre I at det er til at forstå hvilke HTML-, CSS- og JavaScript-filer der høre sammen?
Fordi vi har benyttet astro har vi kun behov for en global style og derudover bliver alt andet styling håndteret i det tilhørende komponent det samnme med js lige udover drop down menuen som har en js fil med passende navn.

Hvordan fordeler I arbejdet, så I undgår at flere arbejder i de samme filer samtidigt? Vi deler arbejdet op så hver person arbejder på en side eller komponent. Derudover så kommunikerer vi hvis vi skal lave noget på kryds.

Hvordan kommunikerer i om ændringer i main branchen når feature merges? Skriv eller sig når folk pull, så kan de gøre det når de har merged deres current branch ind i main.

# Opsætning

Vi har oprettet en .env i vores root directory til at gemme Supabase URL’en og anon API key’en til vores Supabase projekt. Filen er inkluderet i .gitignore, så den forbliver hemmelig.

For at importere SupabaseURL og Key, har vi oprettet en constant som importerer begge disse værdier. Efterfølgende bruger vi disse constants til at oprette en Supabase client, som kan bruges til at interagere med vores database og gør det muligt at hente dataen fra Supabase-projektet.

Vi bruger funktionen
const { data: producers, error } = await supabase.from("Winelist").select("_");
og
const { data: producers, error } = await supabase.from("Winelist").select("_").eq("slug", product).single();
til at hente den data fra Supabase som vi har brug for
