<template>
    
    <start-registration-page-components
    @OpenLang="LangSwitch" 
    v-show="isOpenStartRegPage">
    </start-registration-page-components>


    <LanguageRegistrationPageComponents 
    @OpenEmail="EmailSwitch"
    @CloseLang="LangSwitch"
    v-show="isOpenLang">
    </LanguageRegistrationPageComponents>


    <email-page-components 
    @OpenPassword="PasswordSwitch" 
    @CloseEmail="EmailSwitch"
    v-show="isOpenEmail">
    </email-page-components>


    <password-page-components 
    @ClosePassword="PasswordSwitch"
    v-show="isOpenPassword">
    </password-page-components>
</template>

<script>
import StartRegistrationPageComponents from '@/components/StartRegistrationPageComponents.vue'
import LanguageRegistrationPageComponents from '@/components/LanguageRegistrationPageComponents'
import EmailPageComponents from '@/components/EmailPageComponents.vue'
import PasswordPageComponents from '@/components/PasswordPageComponents.vue';

    export default {
  components: { StartRegistrationPageComponents, EmailPageComponents, PasswordPageComponents, LanguageRegistrationPageComponents},
        data() {
          return {
            isOpenStartRegPage: true,
            isOpenLang: false,
            isOpenEmail: false,
            isOpenPassword: false,
          }
        },
        methods: {
          LangSwitch() {
              this.isOpenLang = !this.isOpenLang;
              this.isOpenStartRegPage = !this.isOpenStartRegPage
          },
          
          EmailSwitch() {
            this.isOpenEmail = !this.isOpenEmail
            this.isOpenLang = !this.isOpenLang;
          },
          
          PasswordSwitch() {
            this.isOpenPassword = !this.isOpenPassword
            this.isOpenEmail = !this.isOpenEmail
          }
        },
    }
</script>

<style lang="scss" scoped>

</style>