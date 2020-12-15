---
title: Fixing Windows Boot (UEFI)
category: tech
created-at: 2020-12-16T12:05:00.857+00:00
---

Primeira vez que escrevo algo sobre Windows, mas é por uma boa causa. Certo dia... instalei uma distro de Linux e perdi o boot p/ o Windows.
Eu poderia pensar... ok, vou configurar o Grub e pronto, mas não, eu queria que selecionando o HD, o boot no Windows iniciaria, como sempre foi por aqui.

Indo direto ao ponto, a configuração de boot do Windows estava desconfigurada e deram muitos erros, essa é uma página p/ recordar os passos caso eu preciso
usa-lo novamente no futuro.

## Criar boot a partir do MacOS p/ instalacao(repair) do Windows

É necessário um USB que dê boot na instalação do windows usando MacOS, segui esse tutorial: https://www.freecodecamp.org/news/how-make-a-windows-10-usb-using-your-mac-build-a-bootable-iso-from-your-macs-terminal/

## Passos p/ criar o setor de boot novamente

1. De um jeito de ir para a linha de comando depois de dar boot com a instalação do Windows.

```
diskpart
list disks
sel disk 0 (onde o windows está instalado)
list vol
sel vol 1 (onde o windows guarda as informações sobre o boot, a minha tem 512MB)
assign letter=G:
exit (sair do diskpart)
--
cd /d G:\EFI\Microsoft\Boot\
# bootrec /fixboot (nao funcionou, usei esse comando abaixo p/ fazer o mesmo)
bcdboot C:\windows /s G: /f UEFI
bootrec /rebuildbcd (ele vai retornar que identificou 0 instalações, mas está ok!)
```

E é isso, só dar o boot, e lembrar de usar essa partição onde está o G:, e não onde o C: está p/ dar boot.

