# 🖋️ Tictactrip - Text Justify API

Projet réalisé dans le cadre du test technique Fullstack pour **Tictactrip**. Cette API en Node.js/TypeScript permet de justifier un texte brut à 80 caractères par ligne, avec gestion d'authentification et limite de consommation.

## 🚀 Lien de l'API en ligne (Demo)
L'API est déployée et testable immédiatement ici :  
**[https://tictactrip-justify.onrender.com](https://tictactrip-justify.onrender.com)**

> **Note :** Le premier chargement peut prendre quelques secondes car l'instance gratuite de Render se met en veille en cas d'inactivité.

---

## 🛠️ Fonctionnalités

- **Justification de texte** : Algorithme alignant les bords gauche et droit à exactement 80 colonnes.
- **Authentification** : Système de génération de token via email (`POST /api/token`).
- **Rate Limiting** : Limite stricte de 80 000 mots par jour et par token.
- **TypeScript** : Code robuste et entièrement typé.
- **ES Modules** : Utilisation des dernières normes Node.js.

---

## 📑 Documentation de l'API

### 1. Obtenir un Token
**Endpoint :** `POST /api/token`  
**Body (JSON) :**
```json
{
  "email": "mohcineer18@gmail.com"
}
```
### 2. Justifier un texte
Endpoint : POST /api/justify

Headers :

Authorization: Bearer bW9oY2luZWVyMThAZ21haWwuY29t

Content-Type: text/plain

Body : Texte brut à justifier.

💻 Installation et Lancement Local
1. Cloner le projet
Bash
git clone [https://github.com/Mohcineer/tictactrip-justify.git](https://github.com/Mohcineer/tictactrip-justify.git)
cd tictactrip-justify
2. Installation et lancement
Bash
npm install
npm run dev
L'API sera disponible sur http://localhost:3000.

⚙️ Choix Techniques
Node.js & Express : Pour la rapidité de mise en place et la performance.

Render : Pour permettre une démonstration live immédiate.

Logique de Justification : Implémentation d'un algorithme gérant les espaces dynamiques pour un rendu propre à 80 caractères.

Développé par Mohcine ERGUI
