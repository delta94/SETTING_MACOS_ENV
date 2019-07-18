# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="/Users/shyn/.oh-my-zsh"

ZSH_THEME="robbyrussell"

plugins=(
  git
  bundler
  dotenv
  osx
  rake
  rbenv
  ruby
)

source $ZSH/oh-my-zsh.sh


alias youtube="open -a 'Google Chrome' http://www.youtube.com "
alias facebook="open -a 'Google Chrome' http://www.facebook.com "
alias trello="open -a 'Google Chrome' http://www.trello.com "
alias skype="open -a 'Google Chrome' https://web.skype.com/ "
alias google="open -a 'Google Chrome' https://www.google.com/ "
alias gitlab="open -a 'Google Chrome' https://gitlab.com/dashboard/projects "
alias github="open -a 'Google Chrome' https://github.com/tranthaison1231?tab=repositories "
alias github_setting="open -a 'Google Chrome' https://github.com/tranthaison1231/SETTING_MACOS_ENV "
alias figma="open -a 'Google Chrome' https://www.figma.com/files/recent "
alias zeplin="open -a 'Google Chrome' https://app.zeplin.io/projects "
alias postman="open -a 'Google Chrome' https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en "
alias photoshop="open -a 'Adobe Photoshop CC 2019' "
alias calendar="open -a 'Calendar' "
alias xd="open -a 'Adobe XD' "
alias git_edit="ga . && gcmsg 'Fix something' && ggpush"
alias git_init="ga . && gcmsg 'Init project' && ggpush"


export NVM_DIR="/Users/shyn/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm