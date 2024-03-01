<template>
  <div class="card flex justify-content-center">
    <Steps v-model:activeStep="active" :model="stepsItems" :readonly="false" class="steps" />
    <div class="screen1" v-if="active == 0">
      <Fieldset legend="Film, séance et nombre de places">
        <div class="fieldZone">
        <FloatLabel class="labelFloat">
          <AutoComplete
            v-model="film"
            :suggestions="items"
            :name="film"
            inputId="Sélectionnez votre film"
            @complete="search"
          />
          <label for="films">Film : </label>
        </FloatLabel>
        </div>
        <div class="fieldZone">
        <label for="" class="right">Votre film :</label>
        <Dropdown
            v-model="film2"
            :options="itemsBase"
           
            placeholder="Choisissez un film"
            class="w-full md:w-14rem"
          />
        </div>
        <div class="fieldZone">
        <!-- places -->
        <label for="placesNormal" class="right">Places normales : </label>
        <InputNumber
          v-model="placesNormal"
          inputId="horizontal-buttons"
          showButtons
          buttonLayout="horizontal"
          :step="1"
          :min="0"
          :name="placesNormal"
          class="places"
        >
          <template #incrementbuttonicon>
            <span class="pi pi-plus"></span>
          </template>
          <template #decrementbuttonicon>
            <span class="pi pi-minus"></span>
          </template>
        </InputNumber> à 11 €
        </div>
        <div class="fieldZone">
          <label for="placesEtudiant" class="right">Places étudiant : </label>
          <InputNumber
            v-model="placesEtudiant"
            inputId="horizontal-buttons"
            showButtons
            buttonLayout="horizontal"
            :step="1"
            :min="0"
            :name="placesEtudiant"
          >
            <template #incrementbuttonicon>
              <span class="pi pi-plus"></span>
            </template>
            <template #decrementbuttonicon>
              <span class="pi pi-minus"></span>
            </template>
          </InputNumber> à 9 €
        </div>

        <div class="fieldZone">
          <label for="placesEtudiant" class="right">Places < 18 ans : </label>
          <InputNumber
            v-model="placesEnfant"
            inputId="horizontal-buttons"
            showButtons
            buttonLayout="horizontal"
            :step="1"
            :min="0"
            :name="placesEnfant"
          >
            <template #incrementbuttonicon>
              <span class="pi pi-plus"></span>
            </template>
            <template #decrementbuttonicon>
              <span class="pi pi-minus"></span>
            </template>
          </InputNumber> à 7 €
        </div>

        <div class="card flex justify-content-center fieldZone">
          <label for="date" class="right">Date : </label>
          <Calendar inputId="date" :name="date" v-model="date" />
        </div>

        <div class="card flex justify-content-center fieldZone">
          <label for="date" class="right">Séance : </label>
          <Dropdown
            v-model="selectedSeance"
            :options="seances"
            optionLabel="name"
            placeholder="Choisissez une séance"
            class="w-full md:w-14rem"
            @change="switchSeance"
          />
        </div>

        <div class="card flex justify-content-center fieldZone">
          <label for="date" class="right">3D : </label>
          <InputSwitch v-model="troisD" :disabled="disabled" />  +2€ par place
        </div>
      </Fieldset>
      <p class="link-right">
        <a href="" @click.prevent="active = 1">
        <span class="pi pi-arrow-right"></span></a>
      </p>
    </div>
    <div class="screen2" v-else-if="active == 1">
      <p>
        
        <a href="" class="button" @click.prevent="active = 0"><span class="pi pi-arrow-left"></span></a>
      </p>
      <Fieldset legend="Vos coordonnées">
        <div class="card flex justify-content-center">
          <FloatLabel class="labelFloat">
            <InputText id="firstname" v-model="firstName" />
            <label for="firstname">Firstname</label>
          </FloatLabel>
        </div>

        <div class="card flex justify-content-center">
          <FloatLabel class="labelFloat">
            <InputText id="lastname" v-model="lastName" />
            <label for="lastname">Lastname</label>
          </FloatLabel>
        </div>

        <div class="card flex justify-content-center">
          <FloatLabel class="labelFloat">
            <InputText placeholder="user@domain.com" id="email" type="email" v-model="email" />
            <label for="email">Email</label>
          </FloatLabel>
        </div>

        <div class="card flex justify-content-center">
          <FloatLabel class="labelFloat">
            <InputText id="promo" v-model="promo" />
            <label for="promo">Code promo</label>
          </FloatLabel>
        </div>
      </Fieldset>
      <p class="link-right">
        <a href="" class="button" @click.prevent="active = 2"><span class="pi pi-arrow-right"></span></a>
        
      </p>
    </div>
    <div class="screen3" v-else>
      <p>
        
        <a href="" class="button" @click.prevent="active = 1"><span class="pi pi-arrow-left"></span></a>
      </p>
      <h2>Résumé de votre réservation</h2>
      <Fieldset legend="Votre séance" class="finale">
      <dl>
        <dt>Film:</dt>
        <dd>{{ film.length == 0 ? 'À choisir' : film }}</dd>
        <dt>Date:</dt>
        <dd>{{ new Date(date).toLocaleDateString() }}</dd>
        <dt>Séances:</dt>
        <dd>{{ selectedSeance.length == 0 ? 'À choisir' : selectedSeance.name }}</dd>
        <dt>3D:</dt>
        <dd>{{ troisD ? 'oui' : 'non' }}</dd>
        <dt>Places normales:</dt>
        <dd>{{ placesNormal }}</dd>
        <dt>Places étudiant:</dt>
        <dd>{{ placesEtudiant }}</dd>
        <dt>Places enfants:</dt>
        <dd>{{ placesEnfant }}</dd>
        <dt>Code promo:</dt>
        <dd>{{ promo.length == 0 ? 'Aucun' : promo }}</dd>
      </dl>
    </Fieldset>
    <Fieldset legend="Vos coordonnées" class="finale">
        <dl>
        <dt>Votre nom :</dt>
        <dd>{{ lastName.length == 0 ? 'Manquant' : lastName }}</dd>
        <dt>Votre prénom :</dt>
        <dd>{{ firstName.length == 0 ? 'Manquant' : firstName  }}</dd>
        <dt>Votre email :</dt>
        <dd>{{ email.length == 0 ? 'Manquant' : email  }}</dd>
      </dl>
    </Fieldset>
    <div class="tools">
      <div class="card flex flex-wrap justify-content-center gap-3">
        <div class="flex align-items-center">
          <Checkbox v-model="conditions" :binary="true" :name="conditions" inputId="conditions" />
          <label for="conditions" class="ml-2"> J'accepte les conditions de vente </label>
        </div>
      </div>
      <Button label="Envoyer" :disabled="!conditions" class="button" icon="pi pi-check" />
    </div>
    
    </div>
    <div class="total">{{ total }} €</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import AutoComplete from 'primevue/autocomplete'
import Checkbox from 'primevue/checkbox'
import InputNumber from 'primevue/inputnumber'
import Calendar from 'primevue/calendar'
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Fieldset from 'primevue/fieldset'
import InputSwitch from 'primevue/inputswitch'
import Dropdown from 'primevue/dropdown'
import Steps from 'primevue/steps'
const stepsItems = ref([
  {
    label: 'Film Info'
  },
  {
    label: 'Infos personnelles'
  },
  {
    label: 'Confirmation'
  }
])

const active = ref(0)
const conditions = ref(false)
const placesNormal = ref(0)
const placesEtudiant = ref(0)
const placesEnfant = ref(0)
const firstName = ref('')
const lastName = ref('')

const film = ref('')
const film2 = ref('')
const itemsBase = ref(['Le pari', 'Drunk', 'Un monde', 'Une femme d\'exception'])
const items = ref([])
const date = ref('')
const email = ref('')
const promo = ref('')
const promos = ['Ciné 2024', 'Film Art', 'Lumière']
const promoOk = computed(() => {
  if(promos.find(item => item == promo.value)) {
    return true
  } else {
    return false
  }
})
const selectedSeance = ref('')
const disabled = computed(() => {
  if (selectedSeance.value.troisD == true) {
    return false
  } else {
    return true
  }
})
const troisD = ref(false)

const seances = [
  {
    name: '11 heures - 3D disponible',
    code: '11 - 3D',
    troisD: true
  },
  {
    name: '13 heures',
    code: '13 - 2D',
    troisD: false
  },
  {
    name: '20 heures',
    code: '20 - 2D',
    troisD: false
  },
  {
    name: '21 heures - 3D disponible',
    code: '21 - 3D',
    troisD: true
  }
]

const switchSeance = () => {
  if (!selectedSeance.value.troisD) {
    troisD.value = false
  }
}

const total = computed(()=> {
  let total = 0
  total += placesEnfant.value * 7
  total += placesEtudiant.value * 9
  total += placesNormal.value * 11
  let totalPlace = placesEnfant.value + placesEtudiant.value + placesNormal.value
  if (troisD.value) {
    total += (2 * totalPlace)
  }
  if(promoOk.value) {
    total = total * 0.9
  }
  return total
})

const search = (event) => {
  console.log(event)
  if(event.query) {
  items.value = itemsBase.value.filter((item) => item.toLowerCase().indexOf(event.query.toLowerCase()) !== -1)
  }
  else {
    items.value = itemsBase.value
  }
}
</script>

<style>
dt {
  float: left;
  clear: both;
  font-weight: bold;
  margin-right: 1rem;
}
.places .p-inputnumber-buttons-horizontal .p-inputnumber-input {
  max-width: 10%;
}
label.right {
  font-weight: bold;
  display: inline-block;
  text-align: right;
  margin-right: 1rem;
  width: 15%;
}
.labelFloat {
  margin-top: 2rem;
}
.button {
  margin-top: 1rem;
}
.finale {
    width: 40%;
    float: left;
    margin-right: 1rem;
}
.tools {
    clear: both;
    padding-top: 1rem;
}
.link-right {
    text-align: right;
}
.total {
  margin-top: 2rem;
  font-weight: bold;
  background-color: #3DD2CC;
  color: white;
  padding: 2rem;
  border-radius: 50%;
  font-size: 2rem;
  height: 5rem;
  width: 12rem;
  text-align: center;
  line-height: 1rem;
  position: absolute;
  right:25rem;
  bottom: 5rem;
}
.fieldZone {
  width: 100%;
  margin-top: 1rem;
}
@media screen and (max-width: 800px) {
    .logo, .steps {
      display: none;
    }
    .logo-page {
      text-align: center;
      margin-bottom: 2rem;
    }
    .logo-page img {
      height: 8rem;
    }
    label.right {
      display: block;
      text-align: left;
      width: 100%;
    }
    .total {
      left: 50%;
      margin-left: -5.5rem;
      bottom: .5rem;
      position: fixed;
      font-size: 1.5rem;
      height: 3rem;
      width: 10rem;
      line-height: .4rem;
    }
     .p-inputnumber-input {
      width: 5rem !important;
    }
    .finale {
      float: none;
      width: 100%;
    }
}
</style>
