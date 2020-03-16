module.exports = {
  theme: {
    extend: {
      fontFamily: {
        logo: ["Roboto", "sans-serif"]
      }
    }
  },
  variants: {},
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-4xxl': {
          'font-size': '6.75rem',
        },
        '.text-25xl': {
          'font-size': '3.4rem',
        },
        '.gridy':{
          'display':'grid',
          'grid-template-columns':'repeat(12, 1fr)',
          'grid-template-rows':'repeat(16, 1fr)'
        },
        '.gridy2':{
          'display':'grid',
          'grid-template-columns':'repeat(4, 1fr)',
          'grid-template-rows':'repeat(16, 1fr)'
        },
        '.boxcon':{
          'grid-column':'1/2',
          'grid-row':'2/3'
        },
        '.boxcon2':{
          'grid-column':'1/6',
          'grid-row':'6/14'
        },
        '.leftcon':{
          'grid-column':'8/13',
          'grid-row':'15/17'
        },
        '.rightcon':{
          'grid-column':'1/6',
          'grid-row':'15/17'
        },
        '.midcon':{
          'grid-column':'1/8',
          'grid-row':'8/15'
        },
        '.toplcon':{
          'grid-column':'8/12',
          'grid-row':'2/3'
        },
        '.topcon':{
          'grid-column':'1/3',
          'grid-row':'4/8'
        },
        '.upcon':{
          'grid-column':'1/5',
          'grid-row':'2/3'
        },
        '.leftycon':{
          'grid-column':'7/10',
          'grid-row':'4/10'
        },
        '.leftyconn':{
          'grid-column':'10/12',
          'grid-row':'9/11'
        },
        '.tracking-XK':{
          'letter-spacing': '0.5em'
        },
        '.tracking-XlK':{
          'letter-spacing': '0.8em'
        },
         '.img-1': {
          'background-image': 'url(/img/img-1.jpg)',
          'background-size': 'cover',
          'background-position': '50% 20%',
          'background-attachment': 'fixed'
        }, 
        '.img-2': {
          'background-image': 'url(/img/img-2.jpg)',
          'background-size': 'cover',
          'background-position': '80% 10%'
        },
        '.hxm':{
          'height':'0.18rem'
        },
        '.immy':{
          'transform': 'rotatex(180deg)',
          'transform-origin': 'top'
        },
        '.reveal':{
          'transform': 'rotate(-180deg)'
      }
        
      }

      addUtilities(newUtilities)
    }
  ]
}
