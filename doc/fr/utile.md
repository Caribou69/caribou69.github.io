# Utile
Cette doc (comme toute celle présente dans `doc/fr`) est en Français.

Quelques liens et astuces.

## Gitbash
Le gitconfig est dans `C://ProgramData/Git/config`.

```bash
[user]
	name = caribou69
[credential]
	helper = store
	username = caribou69
[core]
	symlinks = false
	autocrlf = true
	fscache = true
[color]
	diff = auto
	status = auto
	branch = auto
	interactive = true
[help]
	format = html
[rebase]
	autosquash = true
[merge]
	tool = meld
[diff]
	tool = meld
	algorithm = histogram
	compactionHeuristic = true
	renames = true
	mnemonicprefix = true
[alias]
	st = status -sb
	f = !LANG=en_US git fetch --all --prune --tags
	co = !LANG=en_US git checkout
	cob = !LANG=en_US git checkout -b
	ci = !LANG=en_US git commit -s
	cim = !LANG=en_US git commit -s -m
	commit = !LANG=en_US git commit -s
	cp = !LANG=en_US git cherry-pick
	br = !LANG=en_US git branch -vv
	amend = !LANG=en_US git commit --amend
	pop = !LANG=en_US git stash pop
	clean = clean -xdf
	pushf = "!f() { cur_br=$(git symbolic-ref HEAD | sed -e \"s,.*/\\(.*\\),\\1,\") && LANG=en_US git push origin :${cur_br} && LANG=en_US git push -u origin ${cur_br}; }; f"
	pushn = "!f() { cur_br=$(git symbolic-ref HEAD | sed -e \"s,.*/\\(.*\\),\\1,\") && LANG=en_US git push -u origin ${cur_br}; }; f"
	d = difftool
	impacted = diff --name-only
	undo = reset --soft HEAD^
	uncommit = reset --soft
	unadd = reset --mixed HEAD
	lg = !LANG=en_US git log --graph --format=format:\"%C(bold blue)%h%Creset %C(bold green)%>(8,trunc)%ar%Creset%C(dim yellow)%G?%Creset %C(dim white)%<(8,trunc)%an%Creset%C(auto)% D%Creset %C(white)%<(30,trunc)%s%Creset\" --all --patience
	l = !LANG=en_US git lg --simplify-by-decoration
	ll = !LANG=en_US git log --graph --format=format:\"%C(bold blue)%h%Creset %C(bold green)%>(8,trunc)%ar%Creset%C(dim yellow)%G?%Creset %C(dim white)%<(8,trunc)%an%Creset%C(auto)% D%Creset %C(white)%s%Creset\" --all --patience
	lg2 = !LANG=en_US git log --color=auto --graph --format=format:\"%C(bold blue)%h%Creset - %C(bold cyan)%ai%Creset %C(bold green)(%ar)%Creset%C(bold yellow)%d%Creset%n\"\"          %C(white)%s%Creset %C(dim white)%an%Creset %C(dim white)%G?%Creset\" --all
	lll = !LANG=en_US git log --color=auto --graph --format=format:\"%C(bold blue)%h%Creset %C(dim white)%an%Creset %C(dim white)%G?%Creset %C(bold yellow)%d%Creset%n\"\"   %C(dim white)author %C(bold cyan)%ai%Creset %C(bold green)(%ar)%Creset%n\"\"   %C(dim white)commit %ci (%cr)%Creset %n\"\"%C(white)%s%n%b%Creset \" --all
	orphan = !LANG=en_US git ll $(git reflog | cut -c1-7) &
	orphanlist = !LANG=en_US git reflog | cut -c1-7
```

**.bashrc**
Créer un fichier `.bashrc` dans votre home, ajoutez y:
```bash
# Extend path adding npm lib
export PATH="../Node/node-v10.15.3-win-x64":$PATH
# Replace by the path of your version

echo ".bashrc file loaded"
```

## IDE
Je conseille d'utiliser [webstorm](https://www.jetbrains.com/webstorm/)