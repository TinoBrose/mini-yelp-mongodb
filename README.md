# node mongoose boilerplate

```
curl -d '{"name": "Zu", "surname": "Bat", "age": 16, "username": "zubat", "email": "zubat@pokemon.com", "password": "iamthenight"}' -H "Content-Type: application/json" -X POST http://localhost:5000/auth/register

curl -d '{"name": "Zu", "surname": "Bat", "age": 16,"email": "zubat@pokemon.com", "password": "iamthenight"}' -H "Content-Type: application/json" -X POST http://localhost:5000/auth/login

curl -d '{"name": "Zuzu", "surname": "Bat", "age": 16, "email": "zubat@pokemon.com", "username": "zubat", "password": "iamtheKNIGHT"}' -H "Content-Type: application/json" -X PUT http://localhost:5000/users/6006da1139365c38fc8543d5

// UPDATE USER WITH TOKEN AUTHORIZATION
curl -d '{"name": "Zuzu", "surname": "Bat", "age": 16, "email": "zubat@pokemon.com", "username": "zubat", "password": "iamtheKNIGHT"}' -H "Content-Type: application/json" -H "Authorization: Bearer tokenhere" -X PUT http://localhost:5000/users/6006da1139365c38fc8543d5

curl -H "Content-Type: application/json" -H "Authorization: Bearer tokenhere" http://localhost:5000/auth/me

curl "Authorization: Bearer tokenhere" -X DELETE http://localhost:5000/users/600004e2c116a6b44ff0b2e2

```

curl -d '{"name": "Zu", "surname": "Bat", "age": 16, "email": "zubat@pokemon.com", "username": "zubat", "password": "iamthenight"}' -H "Content-Type: application/json" -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwMDZkYTExMzkzNjVjMzhmYzg1NDNkNSIsImlhdCI6MTYxMTA2MjcyM30.JcH5EzrxbbD6ii6TCBKR0e318F_u5BHRqViNN59H9xM" -X PUT http://localhost:5000/users/6006da1139365c38fc8543d5
