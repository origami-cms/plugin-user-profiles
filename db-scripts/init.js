db = db.getSiblingDB('origami-plugin-user-profile-test');

db.createUser({
    user: "origami",
    pwd: "origami",
    roles: ["readWrite", "dbAdmin"]
});
