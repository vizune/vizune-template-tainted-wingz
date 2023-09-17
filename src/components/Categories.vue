<script setup>
import Frame from './Frame.vue'

const categories = [
    {
        title: 'Graphics',
        items: [
            {
                background: '/backgrounds/01.jpg',
                name: 'Blank buttons',
                url: '/pages/you/blankbuttons.php',
            },
            {
                background: '/backgrounds/02.jpg',
                name: 'Icons',
                url: '/pages/you/icons.php',
            },
            {
                background: '/backgrounds/03.jpg',
                name: 'Icon Bases',
                url: '/pages/you/iconbases.php',
            },
            {
                background: '/backgrounds/04.jpg',
                name: 'Wallpapers',
                url: '/pages/you/wallpapers.php',
            },
            {
                background: '/backgrounds/05.jpg',
                name: 'Layouts',
                url: '/pages/you/layouts.php',
            },
            {
                background: '/backgrounds/06.jpg',
                name: "Valentine's Day",
                url: '/pages/you/VD.php',
            },
            {
                background: '/backgrounds/07.jpg',
                name: 'Halloween',
                url: '/pages/you/HW.php',
            },
            {
                background: '/backgrounds/08.jpg',
                name: 'Fall / Autumn',
                url: '/pages/you/fall.php',
            },
            {
                background: '/backgrounds/09.jpg',
                name: 'Christmas',
                url: '/pages/you/XM.php',
            }
        ]
    },
    {
        title: 'Games',
        items: [
            {
                background: '/backgrounds/10.jpg',
                name: 'Hidden link',
                url: '/pages/you/games/hiddlenlink.php',
            },
            {
                background: '/backgrounds/11.jpg',
                name: 'Puzzle',
                url: '/pages/you/games/puzzle.php',
            }
        ]
    },
    {
        title: 'Joinables',
        items: [
            {
                background: '/backgrounds/12.jpg',
                name: 'Site of the month',
                url: '/pages/you/SOTM.php',
            },
            {
                background: '/backgrounds/13.jpg',
                name: 'Contest',
                url: '/pages/you/contest.php',
            },
            {
                background: '/backgrounds/14.jpg',
                name: 'Exchange',
                url: '/exchange/lostsoulexchange.php',
            },
            {
                background: '/backgrounds/15.jpg',
                name: 'Birthday list',
                url: '/pages/you/birthdays.php',
            }
        ]
    },
    {
        title: 'Adoptables',
        items: [
            {
                background: '/backgrounds/16.jpg',
                name: 'Dolls',
                url: '/pages/you/dolls.php',
            },
            {
                background: '/backgrounds/17.jpg',
                name: 'Claim a hottie',
                url: '/pages/you/claim.php',
            },
            {
                background: '/backgrounds/18.jpg',
                name: 'Claim a Cutie',
                url: '/pages/you/claim2.php',
            }
        ]
    },
    {
        title: 'Trading',
        items: [
            {
                background: '/backgrounds/19.jpg',
                name: 'Swapex',
                url: '/pages/you/swapex.php',
            },
            {
                background: '/backgrounds/20.jpg',
                name: 'Cyber stamps',
                url: '/pages/you/CS.php',
            },
            {
                background: '/backgrounds/21.jpg',
                name: 'Site ID TCG',
                url: '/pages/you/site-id.php',
            }
        ]
    },
    {
        title: 'Other',
        items: [
            {
                background: '/backgrounds/22.jpg',
                name: 'Awards',
                url: '/pages/you/awards4u.php',
            }
        ]
    },
    {
        title: 'Site',
        items: [
            {
                background: '/backgrounds/23.jpg',
                name: 'About',
                url: '/pages/me/aboutTW.php',
            },
            {
                background: '/backgrounds/24.jpg',
                name: 'Gifts',
                url: '/pages/me/gifted.php',
            },
            {
                background: '/backgrounds/25.jpg',
                name: 'Contact',
                url: '/pages/me/email.php',
            }
        ]
    },
    {
        title: 'Salya',
        items: [
            {
                background: '/backgrounds/26.jpg',
                name: 'About the owner',
                url: '/pages/me/aboutme.php',
            },
            {
                background: '/backgrounds/27.jpg',
                name: 'Requests',
                url: '/pages/me/requests.php',
            },
            {
                background: '/backgrounds/28.jpg',
                name: 'My collection',
                url: '/pages/me/collecting.php',
            },
            {
                background: '/backgrounds/29.jpg',
                name: 'My Fantasy Loves',
                url: '/pages/me/myfantasyloves.php',
            }, 
            {
                background: '/backgrounds/30.jpg',
                name: 'TOZ collectables',
                url: '/pages/me/taintedonez.php',
            }
        ]
    },
    {
        title: 'Sasha',
        items: [
            {
                background: '/backgrounds/31.jpg',
                name: 'About Sasha',
                url: '/pages/me/sasha.php',
            }
        ]
    },
    {
        title: 'From other sites',
        items: [
            {
                background: '/backgrounds/32.jpg',
                name: 'Adopted pets',
                url: '/pages/me/apets.php',
            },
            {
                background: '/backgrounds/33.jpg',
                name: 'Adopted others',
                url: '/pages/me/aothers.php',
            },
            {
                background: '/backgrounds/34.jpg',
                name: 'Joined fanlistings',
                url: '/pages/me/joined.php',
            },
            {
                background: '/backgrounds/35.jpg',
                name: 'Awards won',
                url: '/pages/me/awards.php',
            }, 
            {
                background: '/backgrounds/36.jpg',
                name: 'Bishies',
                url: '/pages/me/bishis.php',
            }
        ]
    }
]
</script>

<template>
    <div>
        <div class="flex flex-wrap justify-center gap-4 mb-6" v-for="category in categories">
            <Frame v-for="item in category.items" :asset="item.background" :name="item.name" :url="item.url" />
        </div>
    </div>
    
</template>