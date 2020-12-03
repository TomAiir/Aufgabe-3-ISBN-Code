# Aufgabe-3-ISBN-Code

Erstellen Sie eine HTML-Seite, die ISBN-10-Codes auf Korrektheit prüfen kann. Wie gewohnt machen Sie bitte für jede Teilaufgabe einen neuen git-Branch. In
von Professor Edmund Weitz wird Ihnen nochmal erklärt wie die Prüfziffer eines ISBN-Codes ermittelt werden kann. Am besten versuchen Sie die ersten paar Aufgaben anhand dieser Erklärungen zu implementieren. Falls sie auf zu große Probleme stoßen, sehen Sie
wie der Algorithmus in Python implementiert werden kann. Vergessen Sie nicht auch bei dieser Aufgabe TDD anzuwenden. Überlegen Sie vor allem bei Aufgabe d ob und für was genau Sie Test schreiben könnten.

a init
Legen Sie ein neues Repository samt node package.json an und installieren Sie jest (oder ein beliebiges anderes Testframework) und programmieren Sie eine Funktion namens checkISBN, die einen String entgegen nimmt und die dazugehörige Prüfziffer ergibt.
Achtung:
Die eingegebene ISBN kann neben Ziffern auch Bindestriche enthalten. Diese können ignoriert werden.
Die eingegebene ISBN kann an letzter Stelle auch ein 'X' stehen haben, diese ist als die Zahl 10 zu behandeln.
Die Prüfziffer muss als String zurück gegeben werden. Falls die Prüfziffer den Wert 10 ergibt soll anstatt '10' besser 'X' zurück gegeben werden.
Falls die Prüfziffer 0 ergibt, soll ein leerer String zurück gegeben werden: ''

b simple
Legen Sie eine HTML-Seite mit einem input-Feld und einem Button mit der Beschrüfung "prüfen" an. So bald "Prüfen angeklickt wird" soll ein div mit grüner Schrift anzeigen: "ISBN OK". Ist die eingegebene ISBN nicht korrekt soll ein div mit roter Schrift angezeigt werden: "ISBN corrupt".

c fluent
Löschen Sie den "prüfen"-Button von Ihrer HTML-Seite und geben Sie das Prüfergebnis wie in b_simple aus, sobald in das Eingabefeld eine neue Ziffer eingegeben wird

d advanced
Legen Sie anstatt einem nun vier Eingabefelder an, die durch Bindestriche miteinander verbunden sind und folgende Länge haben:
_-___-_____-_
1 Ziffer
3 Ziffern
5 Ziffern
1 Ziffer

Wenn der Benutzer das Tippen beginnt wird die erste Zahl in das erste Feld geschrieben. So bald ein Feld voll ist, soll in das nächste Feld rechts davon gewechselt werden, um dort das nächste Zeichen einzutragen. Wenn Backspace gedrückt wird, soll die letzte Ziffer gelöscht werden. Achten Sie deshalb darauf, dass Backspace u.U erst mal dazu führen muss, dass ins vorherige Feld gesprungen wird.
Bei jeder Ziffern Eingabe ist die ergebene Prüfziffer in das letzte Feld als sog. Placeholder eingetragen werden. Nutzen Sie CSS um die Prüfziffer im Placeholder-Zustand hellgrau darzustellen.
Nur wenn eine gesamt eingegebene Prüfziffer falsch ist, soll ein div mit dem Text "ISBN corrupted" ausgegeben werden.
