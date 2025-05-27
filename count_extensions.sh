#!/bin/bash

# 🧪 Exercice : Compter les fichiers par extension dans un dossier
# 💬 Énoncé :
# Écris un script Bash qui :
# Prend en argument un dossier (par exemple : ./monDossier)
# Pour chaque type d’extension présent dans ce dossier (ex : .js, .txt, .md…), affiche :
# js : 4 fichiers
# txt : 2 fichiers
# md : 1 fichier
# Le but est d'utiliser une boucle, une commande comme ls, cut ou awk, et un peu de logique.

# ✅ 2. Crée le fichier s’il n’existe pas
# Si tu ne l’as pas encore fait :
# touch count_extensions.sh
# Tu peux aussi le créer depuis VS Code ou avec echo :
# echo "#!/bin/bash" > count_extensions.sh

# ✅ 3. Vérifie qu’il existe
# ls -l count_extensions.sh

# pour le rendre exécutable 
# chmod +x count_extensions.sh

# pour le lancer (l'exécuter)
# ./count_extensions.sh chemin/vers/ton/dossier
# ./count_extensions.sh /c/__DevWeb/_laCapsule/projetPourTests
# ou si on est dans le dossier courant :
# ./count_extensions.sh .

# shebang (ou "hashbang").
# Que fait #!/bin/bash exactement ?
# Il dit : “Ce fichier doit être exécuté avec le programme /bin/bash”
# Sans ça, le système pourrait :
# Essayer de l’exécuter avec un autre shell (comme sh, dash, ou zsh)
# Ou ne pas savoir comment l’interpréter du tout
# Imaginons qu'on utilise une syntaxe spécifique à Bash (ex : [[ condition ]] ou for (( i=0; i<5; i++ ))), mais que le script est exécuté avec sh au lieu de bash :
# ➡️ Le script plantera, sans que tu comprennes forcément pourquoi

# ✅ Vérifie si un argument a été passé à l'exécution
if [ -z "$1" ]; then
  echo "Usage : $0 <nom_de_fichier_ou_dossier>"
else
  # ✅ Si l'argument est un fichier
  if [ -f "$1" ]; then
    echo "✅ L'argument '$1' est un fichier"

    # 🔍 On extrait l'extension (tout ce qui est après le dernier point) en minuscule
    extension=$(basename "$1" | sed 's/^.*\.//' | tr 'A-Z' 'a-z')
    echo "Extension : $extension"

    echo
    echo "📄 Infos sur le fichier '$1' :"
    ls -lh "$1"

    read -n 1 -s -r -p "🔸 Appuie sur une touche pour continuer..." 
    echo
    echo "🧾 Contenu du fichier (10 premières lignes) :"
    head "$1"

  # ✅ Si c’est un dossier
  elif [ -d "$1" ]; then
    echo "✅ L'argument '$1' est un dossier"

  # ❌ Si ce n'est ni fichier ni dossier
  else
    echo "❌ '$1' n'est ni un fichier ni un dossier existant"
  fi
fi

read -n 1 -s -r -p "🔸 Appuie sur une touche pour continuer..."
echo

# 📄 Vérifie l’existence d’un fichier codé en dur
fichier="README.md"
if [ -f "$fichier" ]; then
  echo "Le fichier $fichier existe"
else
  echo "Le fichier $fichier est introuvable"
fi

read -n 1 -s -r -p "🔸 Appuie sur une touche pour continuer..."
echo

# 📂 Liste les fichiers dans le dossier courant (ignore les dossiers)
echo "📁 Fichiers dans le dossier courant :"
ls -p | grep -v / || echo "(aucun fichier)"

read -n 1 -s -r -p "🔸 Appuie sur une touche pour continuer..."
echo

# 📊 Compte le nombre de fichiers par extension (insensible à la casse)
echo "📊 Nombre de fichiers par extension (insensible à la casse) :"

read -n 1 -s -r -p "🔸 Appuie sur une touche pour continuer..."
echo

# 🔄 On liste toutes les extensions en minuscule, trie et dédoublonne
for ext in $(find . -maxdepth 1 -type f -name "*.*" | sed 's|.*\.||' | tr 'A-Z' 'a-z' | sort | uniq); do

  # 🔢 Pour chaque extension, on compte les fichiers correspondants (finissant par .ext, insensible à la casse)
  count=$(find . -maxdepth 1 -type f | grep -iE "\.${ext}$" | wc -l)

  echo "$ext : $count fichiers"
done
