<template>
    <v-row>       
        
        <v-col cols="12">
            <base-card>
                <v-card-text>
                    <div
                        class="d-flex justify-space-between align-center flex-wrap"
                    >
                        <div class="py-4">
                            <div class="card-title mb-0 text-h5">
                                Costo actual de membresia: $400.00
                            </div>
                            <p class="text--disabled ma-0 ">
                                Se toma como base por cliente, pero se puede modificar al realizar la cuenta
                            </p>
                        </div>
                        <v-btn outlined color="primary">
                            Editar
                        </v-btn>
                    </div>
                    
                </v-card-text>
            </base-card>
        </v-col>
       
       
    </v-row>
</template>
<script>
import donationCard from '@/components/card/DonationCard'
export default {
    name: 'Donation',
    metaInfo: {
        // title will be injected into parent titleTemplate
        title: 'Donation'
    },
    components: {
        'donation-card': donationCard
    },
    data() {
        return {
            items: [
                {title: 'Visa Card 4143 **** 3457 Me'},
                {title: 'Master Card 3743 **** 4089'}
            ],
            desserts: [
                {
                    img: require('@/assets/images/logos/001-spotify.svg'),
                    date: '2 July, 2020',
                    desc: 'Spotify Subscriptoin fee',
                    category: 'Music',
                    amount: '-$10',
                    amountColor: 'text-red-500'
                },
                {
                    img: require('@/assets/images/logos/003-apple.svg'),
                    date: '3 July, 2020',
                    desc: 'App Store Payment',
                    category: 'Software',
                    amount: '-$100',
                    amountColor: 'text-red-500'
                },
                {
                    img: require('@/assets/images/logos/004-windows.svg'),
                    date: '6 July, 2020',
                    desc: 'Software Purchase',
                    category: 'Software',
                    amount: '-$100',
                    amountColor: 'text-red-500'
                },
                {
                    img: require('@/assets/images/logos/005-google.svg'),
                    date: '6 July, 2020',
                    desc: 'Adsense Revenue',
                    category: 'Software',
                    amount: '$21000',
                    amountColor: 'text-green-500'
                }
            ],
            dessertsTwo: [
                {
                    id: 2567,
                    bill: 'Premium Subscription',
                    startDate: '23-02-2020',
                    deadline: '27-02-2020',
                    total: '$300.00',
                    status: 'Pending',
                    statusColor: 'text-warning'
                },
                {
                    id: 2568,
                    bill: 'Basic Subscription',
                    startDate: '23-02-2020',
                    deadline: '27-02-2020',
                    total: '$500.00',
                    status: 'Rejected',
                    statusColor: 'text-danger'
                },
                {
                    id: 2569,
                    bill: 'Enterprise Subscription',
                    startDate: '23-02-2020',
                    deadline: '27-02-2020',
                    total: '$700.00',
                    status: 'Delivered',
                    statusColor: 'text-success'
                }
            ]
        }
    }
}
</script>
