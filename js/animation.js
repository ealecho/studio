document.addEventListener('DOMContentLoaded', () => {
console.log('works')
anime.timeline({
    easing: 'easeInOutQuad',
})
.add({
    targets:'.yes',
    translateX: ['0%','100%'],
    duration:2000,
})
.add({
    targets:'.copytext',
    translateX: [900, 0],
    delay: (el, i) => 100*i,
    duration:2000,
},'50')
.add({
    targets:'.hamline',
    translateX: [-600, 0],
    delay: (el, i) => 100*i,
    duration:2000,
},'500')
.add({
    targets:'.contactus',
    translateY: [600, 0],
    duration:500,
},'600')
.add({
    targets:'.uptime',
    translateY: [1600, 0],
    delay: (el, i) => 100*i,
    duration:1000,
},'10')
.add({
    targets:'.uptime2',
    translateY: [1600, 0],
    duration:1000,
},'1500')
.add({
    targets:'.lefttime',
    translateX: [-47, 0],
    opacity:[0,1],
    duration:500,
},'2000')
.add({
    targets:'.box3',
    translateX: [1200, 0],
    duration:500,
},'1500')
.add({
    targets:'.svg-icon',
    translateX: [1200, 0],
    duration:500,
},'2000')
.add({
    targets:'.img',
    scale: [2.5, 1],
    duration:2500,
},'0')
});