const form = document.getElementById("demo-form");
const output = document.getElementById("demo-output");
const list = document.getElementById("demo-list");

const templates = {
  "Agence marketing": [
    "Collecter automatiquement les leads (Meta/Google) → enrichissement IA → CRM",
    "Envoyer un brief automatisé aux équipes + création de projet Notion",
    "Reporting hebdo automatisé avec métriques clés + résumé IA"
  ],
  "E-commerce": [
    "Déclencher une relance panier abandonné personnalisée",
    "Classifier les tickets support par IA et prioriser",
    "Synchroniser stock/commandes vers l'ERP + alertes low stock"
  ],
  "Cabinet de conseil": [
    "Qualification automatique des leads avec score IA",
    "Création de proposition commerciale + suivi automatique",
    "Résumé de réunion automatique + plan d'action partagé"
  ],
  Immobilier: [
    "Synchroniser demandes clients → CRM + notification agent",
    "Générer automatiquement les dossiers de visite",
    "Analyser les retours de visite et prioriser les relances"
  ],
  "Formations en ligne": [
    "Onboarding apprenant automatisé + checklists",
    "Relances progressives pour limiter l'abandon",
    "Synthèse automatique des feedbacks et NPS"
  ]
};

const objectifs = {
  "Gagner du temps": "Automatisations qui éliminent les tâches répétitives",
  "Améliorer la conversion": "Workflows centrés sur le nurturing et la qualification",
  "Réduire les erreurs": "Vérifications automatiques et validations humaines",
  "Améliorer le support client": "IA + priorisation pour un support plus rapide"
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const secteur = data.get("secteur");
  const leads = Number(data.get("leads"));
  const objectif = data.get("objectif");
  const outils = data.get("outils") || "vos outils actuels";

  list.innerHTML = "";
  const ideas = templates[secteur] || [];

  const headline = document.createElement("p");
  headline.innerHTML = `<strong>Focus :</strong> ${objectifs[objectif] || "Optimiser votre pipeline"}.`;

  output.replaceChildren(output.querySelector("h3"), headline, list);

  const leadText = document.createElement("li");
  leadText.textContent = `Avec environ ${leads} leads/mois, on peut automatiser la qualification et le suivi sans perte de qualité.`;
  list.appendChild(leadText);

  ideas.forEach((idea) => {
    const item = document.createElement("li");
    item.textContent = idea;
    list.appendChild(item);
  });

  const tools = document.createElement("li");
  tools.textContent = `Connexion proposée avec ${outils} + alertes Slack/Email.`;
  list.appendChild(tools);
});
