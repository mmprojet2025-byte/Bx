# Bx-Jeunes Impact — site web

Site vitrine de **Bx-Jeunes Impact**, une initiative jeunesse qui vise à connecter, inspirer et avoir un impact positif sur la société grâce à des projets solidaires, créatifs et innovants.

## Pages du site

| Page | Contenu |
|---|---|
| `index.html` | Accueil : présentation, actions, groupes, actualités, contact |
| `a-propos.html` | Mission, valeurs, équipe et partenaires |
| `groupe-creatif.html` | Groupe Créatif : art, design, photo et vidéo |
| `groupe-solidaire.html` | Groupe Solidaire : entraide, sensibilisation, bénévolat |
| `groupe-innovation.html` | Groupe Innovation : numérique, technologie, entrepreneuriat |
| `groupe-communication.html` | Groupe Communication : promotion et réseaux sociaux |
| `mentions-legales.html`, `confidentialite.html` | Pages légales |
| `404.html` | Page d’erreur |

## Technologies

HTML, CSS et JavaScript, sans framework : menu mobile, bouton « retour en haut » et animations respectant la préférence de mouvement réduit.

## Lancer le site en local

Ouvrir `index.html` dans un navigateur, ou démarrer un petit serveur :

```bash
python3 -m http.server 8000
```

Puis ouvrir http://localhost:8000.

## Structure

```text
index.html, a-propos.html, groupe-*.html   pages du site
style.css                                  styles
script.js                                  comportements (menu, retour en haut)
images/                                    logos et visuels
robots.txt, sitemap.xml                    référencement
```

## À finaliser avant publication

- [ ] Remplacer le domaine provisoire `ton-domaine.com` par le vrai nom de domaine.
- [ ] Corriger `robots.txt` et `sitemap.xml` : leurs contenus sont actuellement inversés.
- [ ] Relire les mentions légales et la politique de confidentialité.

## Dépôts liés

- **bx-connect-mvp1** : la plateforme web et mobile Bx-Connect.
- **Bx-Jeunes-Impact-** (archivé) : première ébauche de ce site, remplacée par ce dépôt.
