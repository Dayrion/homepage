import React from 'react';

export const BODY = (FAQLink) => (
  <div>
    <h1>Open Multiplayer</h1>
    <p>
      Un nouveau mode multijoueur qui sort prochainement pour <em>Grand Theft Auto: San Andreas</em> qui sera totalement compatible avec le mode multijoueur déjà existant <em>San Andreas existant.</em>
    </p>
    <br />
    <p>
      Cela signifie que <strong>le client SA:MP actuel et tous les scripts SA:MP existants fonctionneront avec open.mp</strong> et, en plus de cela, plusieurs bugs seront réparés concernant les serveurs de jeu directement et ce, sans hack ou solutions temporaires comme c'est actuellement le cas.
    </p>
    <p>
      Si vous vous demandez quand est-ce que une version publique sera disponible ou comment vous pouvez aider en contribuant au projet, s'il vous plaît visitez <a href="https://www.burgershot.gg/showthread.php?tid=99">ce sujet</a> pour plus d'informations.
    </p>
    <h1>
      <FAQLink>FAQ</FAQLink>
    </h1>
  </div>
);

export const FAQ = () => (
  <div>
    <h1>FAQ</h1>
    <hr />
    <h2>Qu'est-ce que open.mp?</h2>
    <p>open.mp (Open Multiplayer, OMP) est un mode multijoueur pour GTA San Andreas ayant pour but de remplacer le mod multijoueur existant (SA:MP), initialement créé en réponse à l'augmentation malheureuse des problèmes liés aux mises à jour et à la gestion de SA:MP. La sortie initiale aura pour but de remplacer les fichiers des serveurs uniquement. Les clients SA:MP existants pourront se connecter à ces serveurs. Dans le futur, un nouveau client open.mp sera disponible, donnant plus d'opportunité d'avoir des mises à jour intéressantes.</p>
    <hr />
    <h2>Est-ce un dérivé de SA:MP?</h2>
    <p>Non. Il s’agit d’une réécriture complète, mettant à profit des décennies de connaissances et d’expérience. Il y a eu des tentatives de modifier le code source de SA:MP auparavant mais deux problèmes majeurs se sont posés:</p>
    <ol>
      <li>1. Ils étaient basés sur le code source de SA:MP qui avait fuité. Les auteurs de ces mods n'avaient aucun droit légal sur ce code et étaient donc en tord, tant moralement que légalement. Nous refusons catégoriquement d'utiliser ce code. Cela entrave légèrement la vitesse de développement mais c'est le bon choix à long terme.</li>
      <li>2. Ils ont essayé de trop réinventer à chaque fois. Soit en remplaçant tout le moteur de script, soit en suppriment des fonctionnalités tout en ajoutant des nouvelles ou soit en ajustant simplement des choses de manière incompatible. Cela empêche les serveurs existants dotés d'énormes bases de code et joueurs de migrer car ils devraient réécrire une partie de, si ce n'est pas tout, leur code. Nous avons bien l'intention d'ajouter des fonctionnalités et de peaufiner les choses au fil du temps mais nous nous concentrons essentiellement sur la compatibilité des serveurs existants, leur permettant d'utiliser notre code sans modifier les leurs.</li>
    </ol>
    <hr />
    <h2>Pourquoi faites vous ça?</h2>
    <p>
      Malgré de nombreuses tentatives visant à faire progresser officiellement le développement de SA:MP, sous forme de suggestions, d'encouragements et d'offres d'aide de la part de l'équipe bêta; aux côtés d'une communauté qui réclame quelque chose de nouveau; aucun progrès n'a été ressentit. On pensait vaguement que c'était simplement dû à un manque d'intérêt de la part de l'auteur du mod, ce qui n'est pas un problème en soi, mais il n'y avait de successeurs. Plutôt que de laisser les règnes du développement à ceux qui sont intéressés à continuer à travailler sur le mod, le fondateur a simplement voulu tout maîtriser, tout en faisant apparemment avancer les choses le plus lentement possible pour un minimum d'effort. Certains prétendent que c'est pour des raisons de revenu d'argent mensuel mais il n'y a aucune preuve de cela. Malgré un intérêt énorme et une communauté forte et familiale, il pensait que la durée de vie de SA:MP n'est qu'un an ou deux et que la communauté qui avait travaillé si dure pour faire de SA:MP ce qu'il est aujourd'hui ne méritait pas une continuité.
    </p>
    <br />
    <p>Nous ne sommes pas d'accord.</p>
    <hr />
    <h2>Since it is "Open" Multiplayer, will this be open-source?</h2>
    <p>Finalement, c'est le plan, oui. Pour le moment, nous essayons de rendre le développement ouvert sur le plan de la communication et de la transparence (ce qui est en soi une amélioration), et nous allons passer à l’approvisionnement ouvert à mesure que nous le pourrons, une fois que tout sera réglé et réglé.</p>
    <hr />
    <h2>Comment Je Aide?</h2>
    <p>Gardez vos yeux sur les forums. Nous avons un sujet pour quoi exactement. Bien que le projet ait été révélé, il s’agit d’une première publication, qui n’est pas toujours appréciée de façon massive. Merci d'avance de votre intérêt et de votre confiance dans le projet:</p>
    <br />
    <a href="https://www.burgershot.gg/showthread.php?tid=99">
      <u>"Comment Je Aide?" sujet (burgershot.gg)</u>
    </a>
    <hr />
    <h2>Quel est burgershot.gg?</h2>
    <p>burgershot.gg est un forum de jeu, rien de plus. Un grand nombre de personnes est impliquée dans les deux processus. Certains développements et mises à jour d'OMP y sont publiés, mais il s'agit de deux projets indépendants. Ce ne sont pas les forums OMP, et OMP n'est pas une propriété de Burgershot. Une fois qu'un site OMP complet est opérationnel, les deux peuvent être extraits l'un de l'autre (un peu comme SA: MP était jadis hébergé par GTAForums avant que son propre site ne soit opérationnel).</p>
    <hr />
    <h2>Qu'en est-il de OpenMP?</h2>
    <p>The Open Multi-Processing project est "OpenMP", nous sommes "open.mp". Différent.</p>
  </div>
);
