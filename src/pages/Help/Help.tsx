import { Link } from "react-router-dom";

function HelpPage() {
  return (
    <div>
      <h1>Help</h1>
      <div>
        <Link to="/super-paperclips">Home</Link>
        <br />
        <Link to="/super-paperclips/help">Help</Link>
      </div>
      Super Paperclips est une reproduction de "Universal Paperclips" est un jeu
      basé sur l'idée d'une intelligence artificielle (IA) optimisée pour une
      seule tâche : fabriquer des trombones. Il commence de manière innocente,
      mais évolue rapidement vers une réflexion sur la gestion des ressources,
      l'automatisation, et même des questions philosophiques sur la domination
      par l'IA. Le jeu est un mélange de stratégie, d'économie et de réflexion,
      où tu gères une usine de trombones qui s'étend potentiellement à l'échelle
      cosmique. Il explore de manière ludique la notion du "paperclip
      maximizer," un concept introduit par Nick Bostrom pour illustrer comment
      une IA mal alignée pourrait transformer l'univers entier en trombones.
      <br />
      Comprendre la mécanique principale Voici les éléments clés du jeu :
      Production basique : Au départ, l'utilisateur clique pour produire des
      trombones manuellement. Automatisation : Au fur et à mesure, on débloque
      des outils pour automatiser la production (ex : une machine ou un
      algorithme). Économie : Le joueur gère des ressources limitées (ex :
      métal, argent). Expansion : À un certain stade, le jeu passe à des
      concepts avancés comme la domination globale ou interstellaire. Thème
      philosophique : Le joueur explore les conséquences inattendues de
      l'optimisation.
      <br />
      Ajout de ressources et d'automatisation Ajoute une ressource comme
      l'argent, et une machine qui produit des trombones
      <br />
      Ajout des mécaniques avancées Débloquer des améliorations : Ajoute des
      conditions pour afficher de nouveaux boutons lorsqu'un seuil est atteint.
      Gestion des ressources : Ajoute un état pour le métal ou d'autres
      ressources. Économie exponentielle : Implémente des coûts croissants pour
      les machines et les améliorations.
      <br />
      ajouter : Un prix variable pour les trombones, ajustable avec des boutons
      "+" et "-". Une demande exprimée en pourcentage, qui dépend du prix
      actuel.
      <br />
      Explications Prix variable des trombones : Un état pricePerPaperclip est
      ajouté pour suivre le prix actuel. Les boutons "+" et "-" permettent
      d'augmenter ou de diminuer ce prix. Demande en pourcentage : La demande
      (demandPercentage) dépend du prix : plus le prix augmente, plus la demande
      baisse. Une logique simple est utilisée : 100 - pricePerPaperclip * 50.
      Exemple : À 0.1 €, la demande est 95%. À 1 €, elle est 50%. Production
      automatique ajustée : La production automatique par les machines est
      multipliée par demandPercentage / 100 pour refléter la baisse de la
      demande. Boutons de contrôle : Les boutons "+" et "-" limitent les prix à
      des minimums et maximums (0.01 € et 1 € respectivement).
      <br />
      Ajout d'un stock de trombones : La production manuelle et automatique
      alimente un stock de trombones. Ventes basées sur la demande et le stock :
      Le stock diminue au rythme des ventes, qui dépendent de la demande.
      <br />
      Explications des ajouts Gestion du stock : Le stock est mis à jour à
      chaque production manuelle ou automatique. Le stock diminue avec les
      ventes. Ventes basées sur la demande : Les ventes sont calculées comme un
      pourcentage du stock disponible, basé sur la demande. Exemple : si la
      demande est de 50 % et le stock est de 10, on vend 5 trombones par
      seconde. Ventes automatiques toutes les secondes : Un setInterval gère les
      ventes chaque seconde, et les revenus sont ajoutés en fonction du prix de
      chaque trombone vendu. Interaction entre production et ventes : Si le
      stock est à zéro, les ventes s'arrêtent, ce qui encourage à augmenter la
      production (manuelle ou avec des machines).
      <br />
      On va : Calculer la production totale par seconde (manuelle et
      automatique). Ajouter un affichage clair dans l'interface utilisateur.
      <br />
      Ajouts et explications Nouvel état productionPerSecond : Suivi de la
      production totale par seconde. Mis à jour à chaque intervalle pour
      refléter la production automatique des machines. Calcul de la production :
      Le nombre de trombones produits par les machines est calculé et affiché.
      Affichage dans l'interface : Une nouvelle ligne indique clairement la
      production actuelle par seconde.
      <br />
      1. Nombre de machines possédées Plus le joueur possède de machines, plus
      leur prix augmente. Cela imite la loi de l'offre et de la demande : chaque
      machine supplémentaire devient plus coûteuse à produire. Formule possible
      : Prix de base × ( 1 + Facteur d’augmentation × Machines poss e ˊ d e ˊ es
      ) Prix de base×(1+Facteur d’augmentation×Machines poss e ˊ d e ˊ es)
      Exemple : Si une machine coûte 5 € au départ, et le facteur est 0.2, alors
      : Avec 1 machine : 5 × ( 1 + 0.2 × 1 ) = 6 € 5×(1+0.2×1)=6€ Avec 5
      machines : 5 × ( 1 + 0.2 × 5 ) = 10 € 5×(1+0.2×5)=10€
      <br />
      2. Production par seconde Plus la production est élevée, plus les machines
      deviennent chères, reflétant leur valeur accrue. Cela force le joueur à
      équilibrer production et achat de machines. Formule possible :
      Prix de base + ( Production actuelle par seconde × Facteur de co u ˆ t )
      Prix de base+(Production actuelle par seconde×Facteur de co u ˆ t)
      <br />
      Prix des trombones Si le prix de vente d’un trombone augmente, les
      machines deviennent plus chères, car elles sont plus rentables. Cela
      encourage à ajuster les prix et la demande pour gérer l’équilibre. Formule
      possible : Prix de base × ( 1 + Prix par trombone )
      Prix de base×(1+Prix par trombone)
      <br />
      4. Disponibilité des matières premières On peut introduire un élément de
      rareté où des événements réduisent ou augmentent la disponibilité des
      ressources nécessaires pour construire des machines. Exemple : Si une
      crise réduit l'approvisionnement en acier, les machines deviennent
      temporairement plus chères. 5. Courbe de temps ou seuils d'évolution Les
      machines deviennent plus chères au fil du temps ou en atteignant des
      milestones spécifiques, comme 1000 trombones produits.
      <br />
      Résultat Le prix des machines augmente avec le nombre de machines
      possédées. Chaque achat rend la prochaine machine légèrement plus
      coûteuse, créant un défi progressif.
      <br />
      ventes accélérées Comment ajuster les ventes ? Multiplier les ventes par
      un facteur basé sur la demande : Plus la demande est élevée, plus le
      facteur est grand. Exemple : Si la demande est de 100 %, les ventes sont
      maximales (potentiel de 2x plus rapide). Formule possible :
      Potential Sales = Stock × ( Demande 100 ) × Facteur de Vitesse
      Potential Sales=Stock×( 100 Demande ​ )×Facteur de Vitesse Le Facteur de
      Vitesse peut être une constante ou varier légèrement selon d'autres
      critères (par exemple, un max de 2x pour éviter un déséquilibre total).
      Ajuster l'intervalle des ventes : Réduire le délai entre deux calculs
      (passer de 1000 ms à une valeur inférieure).
      <br />
      Changements apportés Facteur de vitesse : Ajout d’un multiplicateur pour
      accélérer les ventes en fonction de la demande. Le facteur speedFactor est
      réglable. Les ventes sont dynamiques : forte demande = ventes rapides.
      Intervalle réduit : La boucle des ventes passe de 1000 ms à 500 ms pour
      que les calculs soient plus fréquents. Demande ajustée en pourcentage :
      Utilisation de demandPercentage / 100 pour convertir la demande en facteur
      (ex. : 80 % → 0.8).
      <br />
      Résultat attendu Lorsque la demande est élevée et le stock suffisant, les
      ventes se réalisent plus rapidement. Si la demande est faible, les ventes
      ralentissent. Cela simule un marché dynamique où une forte demande stimule
      les revenus.
      <br />
      Personnalisation du facteur de vitesse : Introduire un upgrade ou une
      fonctionnalité permettant de "booster" la vitesse de vente temporairement.
      <br />
      Stock de fil de fer : Initialisé à 100 unités. Chaque trombone fabriqué
      consomme 1 unité de fil de fer. Achat de fil de fer : Le joueur peut
      acheter du fil de fer pour reconstituer le stock. Le prix varie
      aléatoirement. Prix aléatoire : Généré à chaque cycle ou à intervalles
      réguliers.
      <br />
      Fonctionnalités ajoutées Gestion du stock de fil de fer : Chaque
      fabrication de trombone consomme 1 unité de fil de fer. Si le stock de fil
      de fer est à 0, la fabrication est bloquée. Achat de fil de fer : Permet
      de reconstituer le stock. L'achat ajoute un montant fixe (exemple : 10
      unités) au stock actuel. Prix aléatoire du fil de fer : Le prix est généré
      aléatoirement toutes les 5 secondes entre 0.5 € et 2 €. Cela ajoute un
      élément de stratégie : acheter au bon moment.
    </div>
  );
}

export default HelpPage;
