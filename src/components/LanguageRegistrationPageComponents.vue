<template>
    
    <div class="container" >
        <span class="close" @click="this.$emit('CloseLang', true)"></span>

        <span id="country"></span>

        <h3>Начнем</h3>
        <h4>Выберите язык</h4>

        <div class="swiper_country" @wheel="scroll">
            <ul class="swiper_country__list"
            @touchstart="startMove"
            v-touch:swipe.top="swipeTop"
            v-touch:swipe.bottom="swipeBottom"
            @touchmove="moved"
            @touchend="endMove"
            >
            <transition name="list" v-for="lang in language.slice(0,5)" :key="lang.id"
            >
                <li class="swiper__item">{{lang.name}}</li>
            </transition>
            </ul>
        </div>
        <button @click="this.$emit('OpenEmail', true)">Next</button>
    </div>
</template>

<script>
    export default {
        data() {
            return{
                language: [
                    {
                        id:1, name: 'Беларусский'
                    },
                    {
                        id:2, name: 'Украинский'
                    },
                    {
                        id:3, name: 'Русский'
                    },
                    {
                        id:4, name: 'Английский'
                    },
                    {
                        id:5, name: 'Немецкий'
                    },
                    {
                        id:6, name: 'Польский'
                    },

                ],
                selectedLanguage: '',
                val: 3,
                y:0,
                move:0,
                animate: false
            }
        },
        methods: {
            swipeTop() {
                this.move = 0
                this.language.push(this.language.shift())
                this.val += 1;
                if(this.val > 6) this.val = 1
                this.animate = false;
            },
            swipeBottom() {
                this.move = 0
                this.language.unshift(this.language.pop())
                this.val -= 1;
                if(this.val < 1) this.val = 6
                this.animate = true;
            },
            scroll(el) {
                if(el.deltaY > 0) this.swipeBottom()
                else this.swipeTop()
            },
            startMove(el) {
                this.y = el.changedTouches[0].clientY
            },
            moved(el) {
                this.move += el.changedTouches[0].clientY
                let minus = this.move - this.y
                if(minus > 7000)  {
                    this.swipeTop()
                }
                else if (minus < -7000) {
                    this.swipeBottom()
                }
            },
            endMove() {
                this.y = 0
            },
            log(el) {
                console.log(el)
            }
        },
        mounted() {
            
           
        },
    }


</script>

<style lang="scss" scoped>
@import "@/styles/variables";
    .container {
        #country {
            background: url(../assets/Country.svg);
            background-repeat: no-repeat;
            background-size: contain;
            width: 18vw;
            height: 9vh;
            margin-bottom: 4vh;
            background-position-x: center;
        }

        .swiper_country {
            margin: 15vh 0 5vh 0;
            .swiper_country__list {
                .swiper__item {
                    list-style: none;
                    font-size: 1.1rem;
                    line-height: 1.35rem;
                    text-align: center;
                    margin-bottom: 1vh;
                    color: $white;

                }

                .move_top{
                    animation: MovedTop .6s ease-out both;
                }
                .move_down{
                    animation: MovedDown .6s ease-out both;
                }
                .move {
                    animation: MovedDown 1000s both;
                }

                @keyframes MovedDown {
                    0% {transform: translateY(-7px);}
                    100% {transform: translateY(0px);}
                }
                @keyframes MovedTop {
                    0% {transform: translateY(7px);}
                    100% {transform: translateY(0px);}
                }
                
                .swiper__item:nth-child(1), .swiper__item:nth-child(5) {
                    opacity: .2;
                }
                .swiper__item:nth-child(2), .swiper__item:nth-child(4) {
                    opacity: .5;
                }
            }
        }
    }
</style>