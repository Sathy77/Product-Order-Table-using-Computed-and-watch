<template>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
    ></v-data-table>
  </template>
  
  <script>
    export default {
      data () {
        return {
          headers: [
            { text: 'Dessert (100g serving)', value: 'name', },
            { text: 'Calories', value: 'calories' },
            { text: 'Fat (g)', value: 'fat' },
            { text: 'Carbs (g)', value: 'carbs' },
            { text: 'Protein (g)', value: 'protein' },
            { text: 'Iron (%)', value: 'iron' },
          ],
          desserts: [
            { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: 1, },
            { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: 1, },
            { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, iron: 7, },
            { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: 1, },
            { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: 1, },
            { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, iron: 7, },
            { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: 1, },
            { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: 1, },
            { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, iron: 7, },
            { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0, iron: 1, },
            { name: 'Ice cream sandwich', calories: 237, fat: 9.0, carbs: 37, protein: 4.3, iron: 1, },
            { name: 'Eclair', calories: 262, fat: 16.0, carbs: 23, protein: 6.0, iron: 7, },
          ],
        }
      },
    }
  </script>