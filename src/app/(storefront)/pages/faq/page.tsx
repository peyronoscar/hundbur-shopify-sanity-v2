import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frågor & svar",
  description: "Här hittar du svar på vanliga frågor.",
};

export default function Page() {
  return (
    <div className="container max-w-4xl py-20 space-y-4 md:space-y-7">
      <h1 className="text-3xl font-semibold md:text-5xl">Frågor & svar</h1>
      <div className="space-y-7">
        <Section title="Beställning">
          <Item title="Leveranstider ca 3-5 arbetsdagar.">
            <p>
              Du lägger din beställning på vår hemsida hundbur.nu. Beställaren
              ska vara minst 18år.
            </p>
            <p>
              All bildinformation skall ses som illustrationer och kan ej heller
              garanteras återge exakt utseende och beskaffenhet.
            </p>
          </Item>
          <Item title="Alltid 14 dagars öppet köp">
            <p>
              Enligt Distans och hemförsäljningslagen har du som kund rätt att
              ångra ditt köp inom 14 dagar efter det att du har tagit emot varan
              och utan speciell anledning. I ditt meddelande till oss måste det
              klart framgå att du ångrar dig. Ångerfristen börjar löpa den dag
              du tog emot varan eller en väsentlig del av den. Om avtalet gäller
              en specialtillverkad vara – eller en vara som fått en tydlig
              personlig prägel, börjar ångerfristen löpa den dag vi lämnat
              information. Alla kostnader för frakt vid returer bekostas av
              köparen. Retursedel får ni från hundbur.nu.
            </p>
            <p>
              En förutsättning är dock att varan är oanvänd och oskadad. Ni har
              rätt att utan kostnad öppna förpackningen för att kontrollera att
              och hur varan fungerar inom rimliga gränser, varan får inte
              användas ovårdat. Om varan inte är i oförändrat skick kan vi komma
              att göra ett prisavdrag som motsvarar varans värdeminskning. Om
              synliga skador finns på varan tar vi ej emot den.
            </p>
          </Item>
          <Item title="Garanti">
            <p>
              Alla garantier på produkter lämnas av våra leverantörer och
              tillverkare, och Artfex tillhandahåller 2 års garanti, samt 4 års
              garanti på ytbehandling (rostskydd). Vi följer konsumentköplagen
              och reklamationer inom 6 månader behandlas enligt denna lag.
            </p>
          </Item>
          <Item title="Leveranstid">
            <p>3-5 arbetsdagar.</p>
            <p>
              Alla våra produkter levereras normalt sätt på 3-5 arbetsdagar med
              DHL och går att få levererade i hela Sverige. Om en vara har
              avvikande leveranstid informerar vi dig som kund om förväntad
              leveranstid. Under normala omständigheter är leveranstiden ca 3
              arbetsdagar efter det att vi mottagit din beställning. Om
              leveranstiden av någon anledning blir längre, kommer vi självklart
              att informera er om det. Ni har då naturligtvis rätt att avstå
              eller ändra beställningen.
            </p>
            <p>
              OBS! Under veckorna 29-31 har vår tillverkare sommarstängt och
              ordrarna som läggs under denna tid kommer inte hanteras och
              skickas förrän vecka 32.
            </p>
          </Item>
          <Item title="Fraktkostnad">
            <p>
              Standard leveransavgift för ombudsleverans är 165 kr/order inom
              Sverige. Vid order över 799kr är leveransen till ombud gratis.
              Standard leveransavgift för hemleverans är 215 kr/order inom
              Sverige. Vid order över 999kr är hemleverans gratis. Kolli som ej
              kan levereras till ombud pga för hög vikt eller skrymmande kan
              komma att få en högre fraktkostnad. Vi informerar självklart dig
              som kund om någon extra avgift kommer att debiteras.
            </p>
          </Item>
          <Item title="Priser och betalning">
            <p>
              Varje vara anges med pris inklusive moms. I kundvagnen kan man se
              det totala priset inklusive alla avgifter, moms, frakt och
              betalning. Betalningsvillkor finns angiven i kundvagnen beroende
              av valt betalningssätt. Fraktvillkor finns angiven i kundvagnen
              beroende av valt fraktsätt.
            </p>
          </Item>
          <Item title="Kortbetalning">
            <p>
              Betalning sker enkelt och säkert via våra betalningsalternativ.
            </p>
            <p>
              Vi håller höga säkerhetskrav och är Level 1 PCI DSS certifierade.
            </p>
          </Item>
          <Item title="Faktura">
            <p>
              Vid betalning via faktura samarbetar vi med Klarna . För att
              handla mot faktura måste du ange ditt personnummer eller
              organisationsnummer. Förutsättning för att få handla mot faktura
              är bland annat att du är registrerad i folkbokföringsregistret i
              Sverige och är över 18 år. Du får inte ha några
              betalningsanmärkningar. Samtliga fakturor är av hundbur.nu
              överlåtna till Klarna AB. Fakturans betalningsvillkor är 10 dagar.
              Vid försenad betalning utgår påminnelseavgift med det belopp som
              är tillåtet enligt lag.
            </p>
          </Item>
          <Item title="Delbetalning">
            <p>
              Klarna erbjuder er att, efter godkänd kreditprövning som sker
              efter ni fyllt i personuppgifterna i kassan, teckna ett
              kontokreditavtal på de villkor som framgår av de allmänna
              villkoren till bilagt kontoavtal.
            </p>
          </Item>
          <Item title="Personuppgiftspolicy GDPR">
            <p>
              Kunduppgifter lagras i maximalt 8 år av oss. Du har enligt
              Personuppgiftslagen rätt att få den information som vi har
              registrerat om dig. Om den är felaktig, ofullständig eller
              irrelevant kan du begära att informationen ska rättas eller tas
              bort. Kontakta oss i så fall via e-post.
            </p>
          </Item>
          <Item title="Ej uthämtade paket">
            <p>
              Ej hämtade varor returneras till oss. För alla paket som inte
              löses ut förbehåller vi oss rätten att debitera dig kostnader för
              returfrakt 199kr per kolli samt en administrations och
              hanteringsavgift, för närvarande 99kr
            </p>
          </Item>
          <Item title="Returer">
            <p>
              Vid retur ska hundbur.nu underrättas så att retur sker till rätt
              adress.Vid retur ska alltid returfraktsedel från hundbur.nu
              användas, retursedel skickas per mail enligt överenskommelse. Vi
              godtar ej retur som skickas på annat sätt än det som är
              föreskrivet i villkoren.
            </p>
            <p>
              Vi skickar en retursedel, fakturerar fraktkostnad från 199kr, samt
              149kr för administration. Returer (returfrakt över 20 kg, kostar
              mellan 300-550 kr/kolli) + 149kr administrations och
              hanteringsavgift, utom om varan är defekt eller om vi har packat
              fel. Returer ska skickas som brev eller paket, inte mot
              postförskott. Vid retur ska alltid vara returneras i
              orginalemballage. Varan får ej ha monterats om retur ska ske. Vi
              godtar ej retur av grind eller bur som har varit monterad. Bur
              eller grind som har varit monterad betraktar vi som begagnad och
              då kan vi ej godta att ta produkten i retur. Eventuellt kostnad
              för emaballag 199 kr/paket.
            </p>
            <p>
              När du utnyttjat din ångerrätt ska du, om det gäller en vara:
              sända den till oss.
            </p>
            <p>
              Återbetalningsskyldighet: Vi ska, om du utnyttjat din ångerrätt,
              betala tillbaka vad du har betalat för varan snarast exkl
              returfrakt + administrations och hanteringsavgift, och ev
              emballagakostnad, se ovan eller senast inom 30 dagar från den dag
              då vi tog emot varan. Du får själv betala returkostnaderna när du
              sänder tillbaka varan. Vi betalar alltid returkostnaden för att
              sända tillbaka så kallade ersättningsvaror eller felaktig
              leverans.
            </p>
          </Item>
          <Item title="Transportskada">
            <p>
              Vid en transportskada ska du omedelbart anmäla skada vid
              utlämningsställe eller till transportör om transport sker till
              annan plats än ombud. Det är av stor vikt att du som kund
              kontrollerar vara eller varor. Upptäcks en skada efter att
              emballage avlägsnats är det viktigt att dokumentera skada med
              bilder så att det kan styrkas mot transportbolaget. Anmälan måste
              inkomma till transportbolaget inom 7 dagar från att gods är
              utlämnat. Rapportera även skadan till oss per mail.
            </p>
          </Item>
          <Item title="Leveransförsening">
            <p>
              Om leveransförsening sker informerar vi er det genom telefon eller
              e-post. Vi gör av förståeliga skäl allt vi kan för att fullfölja
              din beställning. Det finns tyvärr tillfällen som gör det omöjligt
              för oss att fullfölja beställningen, t.ex då vår leverantör inte
              kan fullfölja sitt åtagande till oss.Vi förbehåller oss rätten att
              friskriva oss från all ersättning till kund gällande
              leveransförseningar.
            </p>
          </Item>
          <Item title="Avbeställning">
            <p>
              Avbeställning gör du genom att kontakta hundbur.nu per e-post, vi
              behöver ordernummer för att avbeställa varan/varorna.
              Avbeställning efter det att varorna har levererats är ej möjlig. I
              det fall varan redan är levererade är kunden skyldig att motta
              beställningen. När varan eller varorna är mottagna gäller öppet
              köp enligt gällande lag.
            </p>
          </Item>
          <Item title="Öppet köp- kostnad för returer">
            <p>
              Vi skickar en retursedel fakturerar fraktkostnad i kr samt 149 kr
              för administrations och hanteringsavgift.
            </p>
          </Item>
          <Item title="Reklamationsvillkor">
            <p>
              Det är lämpligt att du som kund kontrollerar varor vid ankomsten,
              för att verifiera att denna är riktig och felfri. Vid reklamation
              skall kund kontakta hundbur.nu. Det är vid alla typer av returer
              viktigt att produkten förpackas på ett sådant sätt att den ej
              riskerar att skadas. För privatkonsument är returfrakten fri vid
              ett giltigt returärende.
            </p>
          </Item>
          <Item title="Äganderättsförbehåll">
            <p>
              Alla varor förblir säljföretagets egendom tills dess full
              betalning erlagts.
            </p>
          </Item>
          <Item title="Övrigt">
            <p>
              hundbur.nu förbehåller sig rätten till ändring av all information,
              inklusive men ej begränsat till priser, tekniska specifikationer
              samt produkterbjudanden, utan föregående avisering. Vid eventuell
              slutförsäljning till uppgivet pris eller p.g.a. att en vara utgått
              eller ev tryckfel pris, har hundbur.nu rätt att häva köpet.
            </p>
          </Item>
        </Section>
        <Section title="Hund i bil">
          <Item title="Transportera hundar">
            <p>
              När du transporterar din hund behöver du göra det på ett säkert
              sätt, bland annat genom att ha god uppsikt över din hund och se
              till att den sitter säkert vid inbromsning. Det finns också
              särskilda regler för när och hur du får resa med tikar och
              hundvalpar och för transporter utomlands. Tänk på att du inte får
              transportera hundar som är sjuka eller skadade.
            </p>
            <p>
              När familjen ska åka iväg vill man ofta att hunden också ska med.
              Innan resan bör du tänka på om hunden kommer att må bra av att
              sitta i bilen under resan eller om hunden har det bättre hos
              vänner eller på ett djur­pensionat.
            </p>
            <p>
              Du får bara transportera dina hundar när de är lämpliga att
              transportera. Hundar som är sjuka eller skadade får inte
              transporteras.
            </p>
          </Item>
          <Item title="Transportera hundar i bil på ett säkert sätt">
            <p>
              När du transporterar enstaka hundar i din bil ska du se till att
              de transporteras på ett säkert sätt.
            </p>
            <p>
              Du kan transportera hunden i kombiutrymmet på din bil om du har
              god uppsikt över den under hela transporten. Hunden ska inte
              riskera att bli skadad eller lida i samband med transporten.
              Därför måste du se till att hunden är säkrad vid inbromsning, till
              exempel genom att använda transportbur, lastgaller eller
              säkerhets­bälte som är anpassat för hundar.
            </p>
            <p>
              Om du transporterar hunden i en bur eller liknande ska den vara
              utformad och placerad på ett sådant sätt att hunden får skugga och
              god ventilation. Du ska se till att bagage eller andra föremål
              inte kan falla över hunden och skada den. Lämna aldrig en hund
              ensam i en varm eller kall bil Du får aldrig lämna ett djur utan
              tillsyn i bilen om det är möjligt att temperaturen inne i bilen
              går över +25°C eller under -5°C.
            </p>
            <p>
              Även om bilen står i skuggan och du lämnar en glipa i fönstret kan
              det snabbt bli mycket varmt inne i en bil. Det är inte bara
              temperaturen som avgör hur snabbt ett djur inne i en bil får
              värmeslag och eventuellt avlider. Även luftfuktigheten har
              betydelse. Ju högre luftfuktighet, desto snabbare överhettas
              djuret. Luftfuktigheten ökar mycket snabbt då hunden hässjar.Rasta
              hunden och ge den vatten minst var 6:e timme
            </p>
            <p>
              Under transporten ska du rasta hunden och ge den vatten minst var
              6:e timme. Den ska få foder med högst 24 timmars mellanrum.
            </p>
            <p>
              En hund får förvaras i bilen i högst 3 timmar när bilen står
              stilla. En hund får förvaras i bilen i högst 3 timmar när bilen
              står stilla. Den får inte förvaras regelbundet i ett fordon eller
              i en bil när du arbetar. Under den tiden måste du ordna en bättre
              lösning för djuret.
            </p>
            <p>
              Hundar får tillfälligt förvaras i bilen vid transporter och
              övernattningar i samband med resor, vid vistelse i områden där
              husdjur inte är tillåtna eller vid andra aktiviteter som till
              exempel jakt, tävlingar, utställningar och utbildningar för
              hunden.
            </p>
            <p>
              När en hund åker bil ska hunden kunna stå och ligga på ett bekvämt
              sätt.
            </p>
            <p>
              Om du använder en bur eller liknande för transporten i personbilen
              ska varje hund ha minst det här utrymmet:
            </p>
            <p>
              Längd: hundens längd gånger 1,10. Du mäter hundens längd från
              nosspets till sittbensknöl när hunden står i normal ställning.
              Bredd: hundens bröstbredd gånger 2,5. Hunden ska kunna ligga ner
              och vända sig obehindrat. Höjd: hundens höjd över hjässan när
              hunden står i normal ställning. Om du transporterar mer än en hund
              i en bur ska bredden för varje hund ökas med den största hundens
              bröstbredd.
            </p>
            <p>
              Du får inte binda en hund vid ett stillastående motorfordon om
              inte en speciell uppbindnings­anordning finns installerad på
              fordonet. Uppbindnings­anordningen ska vara utformad så att
              fordonet inte kan lämna platsen utan att man först tar bort
              anordningen. Det händer varje år att hundar binds vid bilar och
              skadas allvarligt då ägaren kör iväg med hunden fortfarande bunden
              till bilen.
            </p>
            <p>
              En tik som löper ska transporteras åtskild från hanhundar. Du får
              inte transportera en dräktig tik om det är 2 veckor eller mindre
              kvar till den beräknade födelsen om du ska åka längre än 5 mil. Du
              får heller inte transportera en tik tidigare än 1 vecka efter
              valpningen om du ska åka längre än 5 mil. En hundvalp måste vara
              minst 1 vecka och naveln bör vara helt läkt för att du ska få
              transportera den. En tik med diande valpar ska transporteras
              tillsammans men hållas åtskilda från andra djur. När det är
              brådskande att åka till veterinären Om det är brådskande får du
              transportera ett sjukt eller skadat djur till veterinären även om
              du inte uppfyller kraven men det får inte finnas någon risk för
              att djuret kan lida av transporten. Om du är tveksam till om det
              är lämpligt att transportera djuret ska du kontakta en veterinär.
            </p>
            <p>
              Om du transporterar hundar i en personbil eller lätt lastbil vid
              regelbunden och återkommande yrkes­verksamhet finns det fler
              regler som du måste följa:
            </p>
            <p>
              När hundarna lastas i eller ur fordonet ska du använda lämplig
              utrustning. Du ska kunna sköta om hundarna under transporten eller
              låta någon annan lämplig person sköta om dem. Det fordon som du
              använder för transporten ska ha ett utrymme som är särskilt avsett
              för hundar. Utrymmet ska vara avskärmat mot person­utrymmet med
              galler eller nät. Utrymmet där hundarna transporteras ska vara
              utformat så att de kan stå upp och ligga ner på ett bekvämt sätt.
              Om det behövs ska du kunna sätta in skiljeväggar som skyddar
              hundarna. Utrymmet ska vara utformat så att det skyddar hundarna
              mot solljus. Det ska ventileras mekaniskt med en fläkt som
              fungerar även då motorn på fordonet är avstängd. Hundarna får inte
              förvaras permanent i ett transportmedel. Det ska finnas bra
              möjligheter att rädda hundarna ur fordonet vid brand eller annan
              olycka och utrymning ska kunna ske via mer än en utrymningsväg
              utan besvär eller fördröjning.
            </p>
            <p>Källa Jordbruksverket</p>
          </Item>
        </Section>
        <Section title="Hundburens mått">
          <Item title="Vilken storlek på hundbur ska jag välja till min hund?">
            <p>
              Eftersom storleken på hundar kan variera stort är det bästa att
              själv mäta hunden och välja bur efter Jordbruksverkets
              bestämmelser. Om du använder en bur eller liknande för transporten
              i personbilen ska varje hund ha minst följande utrymme:
            </p>
            <p>
              Längd = hundens längd från nosspets till sittbensknöl när hunden
              står i normal ställning gånger 1,10.
            </p>
            <p>
              Bredd = hundens bröstbredd gånger 2,5. Hunden ska kunna ligga ner
              och vända sig obehindrat.
            </p>
            <p>
              Höjd = hundens höjd över hjässan när hunden står i normal
              ställning.
            </p>
            <p>
              Om du transporterar mer än en hund i en bur ska bredden för varje
              hund ökas med den största hundens bröstbredd.Du är också varmt
              välkommen att kontakta Kundtjänst via mail på info@hundbur.nu för
              råd och hjälp.
            </p>
            <p>Mejla din fråga om du är osäker: info@hundbur.nu</p>
          </Item>
        </Section>
      </div>
    </div>
  );
}

function Section({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="space-y-5">
      <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
      {children}
    </section>
  );
}

function Item({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold md:text-xl text-foreground">
        {title}
      </h3>
      {children}
    </div>
  );
}
