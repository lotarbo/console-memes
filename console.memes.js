const memes = [
    {mem: '(╯°□°）╯︵ ┻━┻', name: 'fuck'},
    {mem: '┻━┻ ︵ヽ(`Д´)ﾉ︵ ┻━┻', name: 'dfuck'},
    {mem: '(ノಠ益ಠ)ノ彡┻━┻', name: 'holyshit'},
    {mem: '┬─┬ノ( º _ ºノ)', name: 'ok'},
    {mem: '¯\\_(ツ)_/¯', name: 'hah'},
    {mem: '╯°□°）╯︵(\\ .o.)\\', name: 'sparta'},
    {mem: '┬─┬﻿ ︵ /(.□. \\', name: 'soviet'},
    {mem: 'ಠ_ಠ', name: 'wtf'},
]

memes.forEach(function({name, mem}) {
    return console[name] = function(...args) {
        return console.log(mem + ' ' + args.join(', '))
    }
})