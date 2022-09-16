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

User.reset_pk_sequence
Event.reset_pk_sequence
Ticket.reset_pk_sequence

u1 = User.create!(username: "Evan", password: "123")
u2 = User.create!(username: "Alex", password: "1234")
u3 = User.create!(username: "John", password: "abc")
u4 = User.create!(username: "Jim", password: "abcd")
u5 = User.create!(username: "Kevin", password: "abc123")

e1 = Event.create!(name: 'Eagles', location: 'Canadian Tire Centre, Ottawa, ON', date:'Sep 13', time:'8:00 PM', price: 175, image: 'https://s1.ticketm.net/dam/a/8c8/25ea92b5-c7f0-40dc-a734-dccf483e78c8_1630621_TABLET_LANDSCAPE_LARGE_16_9.jpg?width=450&height=255&fit=crop&auto=webp')
e2 = Event.create!(name: 'Pearl Jam', location: 'Bridgestone Arena, Nashville, TN', date:'Sep 16', time:'7:30 PM', price: 750, image: 'https://s1.ticketm.net/dam/a/415/2a7a1127-1118-49e3-bf82-fe8569e75415_1636231_EVENT_DETAIL_PAGE_16_9.jpg')
e3 = Event.create!(name: 'Bill Burr: Slight Return', location: 'Capital One Arena, Washington, DC', date:'Sep 15', time:'7:00 PM', price: 50, image: 'https://s1.ticketm.net/dam/a/93b/aa39c6d4-9b0b-4bd5-98aa-1ed529bf293b_1524541_EVENT_DETAIL_PAGE_16_9.jpg')
e4 = Event.create!(name: 'Miami Heat vs. Minnesota Timberwolves', location: 'FTX Arena, Miami, FL', date:'Oct 04', time:'7:30 PM', price: 75, image: 'https://s1.ticketm.net/dam/a/599/f9331497-7667-4f9d-9d26-d144cb25a599_1339911_EVENT_DETAIL_PAGE_16_9.jpg')
e5 = Event.create!(name: 'Dallas Cowboys vs. Cincinnati Bengals', location: 'AT&T Stadium, Arlington, TX', date:'Sep 18', time:'3:25 PM', price: 90 , image: 'https://s1.ticketm.net/dam/a/7e4/6f79c7fd-ac9a-4dba-97a6-1a6be82407e4_1325121_EVENT_DETAIL_PAGE_16_9.jpg')
e6 = Event.create!(name: 'Disney On Ice presents Frozen & Encanto', location: 'Watsco Center at the University of Miami, Coral Gables, FL', date:'Sep 18', time:'2:30 PM', price: 30 , image: 'https://s1.ticketm.net/dam/a/a21/0309f480-d48e-4952-83e0-e935bb59fa21_1709401_EVENT_DETAIL_PAGE_16_9.jpg')
e7 = Event.create!(name: 'Carden International Circus Spectacular', location: 'Harang Auditorium formerly Thibodaux Civic Center, Thibodaux, LA', date:'Sep 21', time:'6:30 PM', price: 25 , image: 'https://s1.ticketm.net/dam/a/1b3/9a484008-ea93-474a-80e6-a2b7f5b7e1b3_1262901_EVENT_DETAIL_PAGE_16_9.jpg')
e8 = Event.create!(name: 'Chris Rock Ego Death World Tour 2022', location: 'Fox Theatre Detroit, Detroit, MI', date:'Sep 18', time:'7:00 PM', price: 70 , image: 'https://s1.ticketm.net/dam/a/a55/db61cae8-bcff-4c5c-a851-7e4bcbe9ca55_1731151_EVENT_DETAIL_PAGE_16_9.jpg')
e9 = Event.create!(name: 'Earth, Wind & Fire', location: 'Choctaw Grand Theater, Durant, OK', date:'Sep 16', time:'8:00 PM', price: 80 , image: 'https://s1.ticketm.net/dam/a/aaa/25ddb103-d068-4344-89be-55dcfe2adaaa_641921_EVENT_DETAIL_PAGE_16_9.jpg')
e10 = Event.create!(name: 'Lady Gaga: The Chromatica Ball', location: 'Hard Rock Stadium, Miami, FL', date:'Sep 17', time:'7:00 PM', price: 80 , image: 'https://s1.ticketm.net/dam/a/7d9/eee0a58c-78f3-4da2-945f-fa60c12877d9_1630911_EVENT_DETAIL_PAGE_16_9.jpg')

t1 = Ticket.create!(user_id: u1.id, event_id: e1.id)
t2 = Ticket.create!(user_id: u1.id, event_id: e2.id)
t3 = Ticket.create!(user_id: u2.id, event_id: e3.id)
t4 = Ticket.create!(user_id: u3.id, event_id: e1.id)
t5 = Ticket.create!(user_id: u3.id, event_id: e4.id)
t6 = Ticket.create!(user_id: u4.id, event_id: e4.id)
t7 = Ticket.create!(user_id: u4.id, event_id: e5.id)
t8 = Ticket.create!(user_id: u2.id, event_id: e6.id)
t9 = Ticket.create!(user_id: u5.id, event_id: e7.id)
t10 = Ticket.create!(user_id: u5.id, event_id: e1.id)
t11 = Ticket.create!(user_id: u3.id, event_id: e9.id)
t12 = Ticket.create!(user_id: u1.id, event_id: e9.id)
t13 = Ticket.create!(user_id: u5.id, event_id: e8.id)
t14 = Ticket.create!(user_id: u4.id, event_id: e10.id)
t15 = Ticket.create!(user_id: u1.id, event_id: e10.id)


puts "Done seeding!"