<template>
  <article class="card h-100">

    <img :src="lugar.img" class="card-img-top" :alt="`Imagen de ${lugar.nombre}`" />

    <div class="card-body text-center d-flex flex-column">

      <h5 class="titulo-planeta">{{ lugar.nombre.toUpperCase() }}</h5>

      <p class="flex-grow-1">{{ descripcionCorta }}</p>

      <div class="mb-2">
        <span class="badge-temp" :style="estiloColor">
          {{ tempFormateada }} · {{ lugar.estadoActual }}
        </span>
      </div>

      <span v-if="lugar.usaApiReal" class="badge bg-success mb-2" style="font-size:0.65rem;">
        🌐 Datos reales (Open-Meteo)
      </span>

      <router-link
        :to="{ name: 'detalle', params: { id: lugar.id } }"
        class="btn btn-primary mt-auto"
      >
        Ver más
      </router-link>

    </div>
  </article>
</template>

<script>
import { COLOR_MAP, formatTemp, formatTempF } from '../clima.js'

export default {
  name: 'TarjetaPlaneta',

  props: {
    lugar: { type: Object, required: true },
    unidad: { type: String, default: 'C' },
  },

  computed: {
    descripcionCorta() {
      return this.lugar.desc.length > 110
        ? this.lugar.desc.substring(0, 110) + '…'
        : this.lugar.desc
    },

    tempFormateada() {
      return this.unidad === 'F'
        ? formatTempF(this.lugar.tempActual)
        : formatTemp(this.lugar.tempActual)
    },

    estiloColor() {
      const c = COLOR_MAP[this.lugar.modifier] ?? COLOR_MAP.mild
      return {
        background:   c.bg,
        color:        c.color,
        border:       `1px solid ${c.border}`,
        borderRadius: '20px',
        padding:      '4px 12px',
        fontSize:     '0.8rem',
        fontWeight:   '700',
        display:      'inline-block',
      }
    },
  },
}
</script>
