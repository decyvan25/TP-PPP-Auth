# TP-PPP-Auth
Voici les réponses complètes et précises pour remplir votre TP Packet Tracer sur la navigation dans Cisco IOS. Vous pouvez directement les recopier sur votre document.

---

## Partie 1 : Établir des connexions de base, accéder à l'interface en ligne de commande et découvrir l'Aide

### Étape 2 : Établissez une session de terminal avec S1

* **Question : Quelle est la valeur du paramètre des bits par seconde ?**
**Réponse :** **9600** bits par seconde (c'est le débit en bauds standard pour une connexion console Cisco).
* **Question : Quelle est l'invite affichée à l'écran ? Que signifie-t-elle ?**
**Réponse :** L'invite affichée est **`Switch>`** (ou `S1>`). Elle signifie que l'on se trouve actuellement en **mode d'exécution utilisateur** (*User EXEC Mode*). Dans ce mode, les privilèges sont très limités et on ne peut faire que des vérifications de base.

### Étape 3 : Découvrez l'Aide IOS

* **Quelle commande commence par la lettre « C » ?**
**Réponse :** `connect`
* **Quelle commande commence par la lettre « P » ?**
**Réponse :** `ping`
* **Quelles sont les commandes qui commencent par « D » ?**
**Réponse :** `disconnect`
* **S1> t? — Quelles sont les commandes affichées ?**
**Réponse :** `telnet`, `terminal`
* **S1> te? — Quelles sont les commandes affichées ?**
**Réponse :** `telnet` *(car la commande `terminal` commence par "ter" et non "te")*

---

## Partie 2 : Découvrir les modes d'exécution

### Étape 1 : Passez en mode d'exécution privilégié

* **Question : Quelle information affichée décrit la commande enable ?**
**Réponse :** *Turn on privileged commands* (Activer les commandes privilégiées).
* **S1> en [Touche Tab] — Que voyez-vous apparaître après avoir appuyé sur la touche Tab ?**
**Réponse :** Le mot se complète automatiquement pour afficher la commande entière : **`enable`**.
* **Que se passerait-il si vous saisissiez te à l'invite (suivi de Tab ou Entrée) ?**
**Réponse :** L'IOS afficherait un message d'erreur **`% Ambiguous command: "te"`** car plusieurs commandes commencent par ces lettres (`telnet` et `terminal`), le système ne peut donc pas deviner laquelle choisir.
* **Saisissez la commande enable et appuyez sur Enter. Quel changement observez-vous sur l'invite ?**
**Réponse :** Le symbole **`>`** s'est transformé en **`#`**, l'invite est maintenant **`S1#`**.
* **Combien de commandes sont affichées maintenant que le mode d'exécution privilégié est actif ?**
**Réponse :** Beaucoup plus qu'en mode utilisateur (on passe d'une dizaine de commandes à plusieurs dizaines de commandes d'administration avancées).
* **Combien de commandes commencent par la lettre « C » en mode d’exécution privilégié ?**
**Réponse :** Il y en a plusieurs (généralement 4 à 5 selon la version, comme `clear`, `clock`, `configure`, `connect`, `copy`).
* **Donnez alors quelques exemples de commandes commençant par « C » :**
**Réponse :** `clock`, `configure`, `copy`, `clear`.
* **Que remarquez-vous lorsque vous comparez les commandes commençant par « c » en mode utilisateur et en mode privilégié ?**
**Réponse :** Le mode privilégié offre un panel de commandes beaucoup plus large et puissant (permettant la modification de la configuration ou la gestion des fichiers), alors que le mode utilisateur ne propose que la commande basique `connect`.

### Étape 4 : Passez en mode de configuration global

* **S1# configure — Quel est le message affiché ?**
**Réponse :** `Configuring from terminal, memory, or network [terminal]?`
* **Appuyez sur Entrée [...] Quel changement observez-vous sur l'invite ?**
**Réponse :** L'invite devient **`S1(config)#`**, ce qui confirme que l'on est entré dans le mode de configuration globale.

---

## Partie 3 : Régler l'horloge

### Étape 1 : Utilisez la commande clock

* **S1# show clock — Quelle information s'affiche ? Quelle est l'année affichée ? Que déduisez-vous ?**
**Réponse :** L'heure par défaut du système s'affiche. L'année affichée est généralement **1993**. On en déduit que l'horloge interne de l'équipement n'est pas à l'heure et nécessite d'être configurée manuellement ou synchronisée.
* **S1# clock [Entrée] — Quelle information s'affiche ?**
**Réponse :** Le message d'erreur **`% Incomplete command`** s'affiche.
* **S1# clock ? — Quelle information s'affiche ?**
**Réponse :** `set  Set the time and date` (indique que l'argument valide suivant est `set`).
* **S1# clock set ? — Quelle est l'information demandée ?**
**Réponse :** `hh:mm:ss Current time` (l'heure actuelle au format Heures:Minutes:Secondes).
* **Qu'auriez-vous vu s'afficher si seule la commande clock set avait été entrée, sans demande d'aide par le biais du point d'interrogation ?**
**Réponse :** À nouveau le message d'erreur **`% Incomplete command`**.
* **S1# clock set 15:00:00 ? — Quelles informations supplémentaires sont demandées ? Que pouvez-vous en déduire ?**
**Réponse :** L'IOS demande `<1-31> Day of the month` ou `MONTH Month of the year`. On en déduit que le système attend maintenant le jour et le mois pour compléter la date.
* **Quelle commande permet de définir correctement la date et l’heure du switch ?**
**Réponse :** `clock set 15:00:00 30 Mar 2026`
* **S1# show clock — Quelle date et heure s’affichent ? Correspondent-elles à celles que vous avez configurées ?**
**Réponse :** L'heure affichée est légèrement supérieure à 15:00:00 (ex: `15:00:04`) et la date est le mardi 30 mars 2026. Oui, cela correspond exactement à ce qui a été configuré.
* **Question (Étape 1.8) : Que se passe-t-il si la commande n’est pas correctement saisie ?**
**Réponse :** L'IOS rejette la commande et affiche un message d'erreur, souvent accompagné d'un marqueur `^` indiquant l'endroit exact de la faute de syntaxe (ex: `% Invalid input detected at '^' marker`).
* **Question (Étape 1.9) : Expliquez pourquoi l’heure affichée est légèrement différente de celle configurée (15:00:00).**
**Réponse :** C'est le temps de latence humaine : quelques secondes se sont écoulées entre le moment où l'on a validé la configuration de l'horloge et le moment où l'on a tapé la commande de vérification `show clock`. L'horloge du switch a continué de tourner en temps réel pendant ce laps de temps.

### Étape 2 : Examinez d'autres messages de commande

* **Question : Quel est le rôle des messages d’erreur dans Cisco IOS ?**
**Réponse :** Ils guident l'administrateur en lui indiquant précisément la nature du problème (commande incomplète, ambiguë ou erronée) et l'emplacement de l'erreur de syntaxe grâce au curseur de détection `^`.
* **Question : Quels messages sont renvoyés pour chaque commande ?**
* `S1# cl + Tab` $\rightarrow$ **Aucun changement / Aucun message** (car l'expression reste ambiguë entre `clear` et `clock`).
* `S1# clock` $\rightarrow$ **`% Incomplete command`** (Commande incomplète).
* `S1# clock set 25:00:00` $\rightarrow$ **`% Invalid input detected at '^' marker`** (avec le marqueur pointant sous le "25", car le format 24h ne dépasse pas 23).
* `S1# clock set 15:00:00 32` $\rightarrow$ **`% Invalid input detected at '^' marker`** (avec le marqueur pointant sous le "32", car un mois ne comporte pas 32 jours).



---

## Questions de synthèse

**1. Quel est le rôle du système d’exploitation Cisco IOS ?**
Il gère les ressources matérielles des équipements réseau Cisco (routeurs et commutateurs) et fournit l'interface utilisateur en ligne de commande (CLI) nécessaire pour les configurer, les sécuriser et les maintenir opérationnels.

**2. Quel type de câble est utilisé pour connecter PC1 au commutateur S1 dans ce TP ?**
Un câble **Console** (de couleur bleu clair sous Packet Tracer).

**3. Quelle commande permet de passer du mode utilisateur au mode privilégié ?**
La commande **`enable`** (ou son abréviation `en`).

**4. À quoi sert l’aide contextuelle (?) dans Cisco IOS ?**
Elle sert à lister les commandes disponibles dans le mode actuel, à trouver les commandes commençant par des lettres spécifiques, ou à connaître les arguments/paramètres attendus à la suite d’une commande incomplète.

**5. Quelle est la différence entre les invites suivantes : `Switch>` et `Switch#` ?**

* `Switch>` correspond au **mode utilisateur** (droits très restreints, commandes de consultation basiques uniquement).
* `Switch#` correspond au **mode privilégié** (accès complet aux diagnostics, aux visualisations de configuration et passerelle vers le mode de configuration globale).

**6. Quelle commande permet d’afficher l’heure du commutateur ?**
La commande **`show clock`**.

**7. Quelle commande permet de configurer l’horloge dans Cisco IOS ?**
La commande **`clock set [hh:mm:ss] [Jour] [Mois en anglais] [Année]`** (Exemple : `clock set 15:00:00 30 Mar 2026`).

**8. Pourquoi est-il important de connaître les modes d’exécution de Cisco IOS avant de configurer un équipement réseau ?**
L'architecture de Cisco IOS est strictement hiérarchique. Chaque mode possède un jeu de commandes qui lui est propre. Connaître ces modes est indispensable pour savoir où l'on se situe, éviter les erreurs de saisie et savoir dans quel mode naviguer pour appliquer une configuration spécifique (par exemple, on ne peut modifier le nom de l'appareil que depuis le mode de configuration globale).
