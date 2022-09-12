# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding...."

User.destroy_all
Event.destroy_all
Ticket.destroy_all

u1 = User.create(username: "Evan", password_digest: "123")
u2 = User.create(username: "Alex", password_digest: "123")

e1 = Event.create(name: 'Eagles', location: 'Canadian Tire Centre, Ottawa, ON', date:'Sep 13', time:'8:00 PM', price: 175, image: 'https://s1.ticketm.net/dam/a/8c8/25ea92b5-c7f0-40dc-a734-dccf483e78c8_1630621_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=450&height=255&fit=crop&auto=webp')
e2 = Event.create(name: 'Pearl Jam', location: 'Bridgestone Arena, Nashville, TN', date:'Sep 16', time:'7:30 PM', price: 750, image: 'https://s1.ticketm.net/dam/a/415/2a7a1127-1118-49e3-bf82-fe8569e75415_1636231_EVENT_DETAIL_PAGE_16_9.jpg')
e3 = Event.create(name: 'Bill Burr: Slight Return', location: 'Capital One Arena, Washington, DC', date:'Sep 15', time:'7:00 PM', price: 50, image: 'https://s1.ticketm.net/dam/a/93b/aa39c6d4-9b0b-4bd5-98aa-1ed529bf293b_1524541_EVENT_DETAIL_PAGE_16_9.jpg')

t1 = Ticket.create(user_id: u1.id, event_id: e1.id)
t2 = Ticket.create(user_id: u1.id, event_id: e2.id)
t3 = Ticket.create(user_id: u2.id, event_id: e3.id)


puts "Done seeding!"