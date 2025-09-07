Got it ✅ — here’s a **MongoDB Cheat Sheet** you can keep handy. I’ll cover the essentials for **beginners to intermediate**: commands, queries, operators, indexes, aggregation, etc.

---

# 🗃️ MongoDB Cheat Sheet

---

## 🔹 Basics

```bash
# Connect to MongoDB shell
mongosh

# Show databases
show dbs

# Switch database (creates if not exists)
use mydb

# Show collections
show collections
```

---

## 🔹 Create / Insert

```js
// Insert one document
db.users.insertOne({ name: "Shrikant", age: 28, role: "Engineer" })

// Insert many
db.users.insertMany([
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
])
```

---

## 🔹 Read / Query

```js
// Find all
db.users.find()

// Find one
db.users.findOne({ name: "Alice" })

// Filter with condition
db.users.find({ age: { $gt: 25 } })   // age > 25

// Projection (include fields)
db.users.find({}, { name: 1, age: 1 })

// Sort & Limit
db.users.find().sort({ age: -1 }).limit(5)
```

---

## 🔹 Update

```js
// Update one
db.users.updateOne(
  { name: "Alice" },
  { $set: { age: 26 } }
)

// Update many
db.users.updateMany(
  { role: "Engineer" },
  { $set: { active: true } }
)
```

---

## 🔹 Delete

```js
// Delete one
db.users.deleteOne({ name: "Bob" })

// Delete many
db.users.deleteMany({ role: "Intern" })
```

---

## 🔹 Operators

* **Comparison:** `$eq`, `$ne`, `$gt`, `$gte`, `$lt`, `$lte`, `$in`, `$nin`
* **Logical:** `$and`, `$or`, `$not`, `$nor`
* **Element:** `$exists`, `$type`
* **Array:** `$all`, `$elemMatch`, `$size`
* **Update:** `$set`, `$inc`, `$push`, `$pull`, `$addToSet`

Example:

```js
db.users.find({ $or: [ { age: { $lt: 20 } }, { age: { $gt: 40 } } ] })
```

---

## 🔹 Indexes

```js
// Create index
db.users.createIndex({ name: 1 })

// Unique index
db.users.createIndex({ email: 1 }, { unique: true })

// Show indexes
db.users.getIndexes()
```

---

## 🔹 Aggregation Framework

```js
db.orders.aggregate([
  // Match filter
  { $match: { status: "delivered" } },

  // Group & sum
  { $group: { _id: "$customerId", totalSpent: { $sum: "$amount" } } },

  // Sort
  { $sort: { totalSpent: -1 } }
])
```

---

## 🔹 Relationships

```js
// Embedding (nested docs)
{
  name: "Alice",
  address: { city: "Pune", zip: 411001 }
}

// Referencing (manual relation)
{
  userId: ObjectId("64f2a9f..."),
  orderId: ObjectId("64f2aa1...")
}
```

---

## 🔹 Useful Commands

```js
db.stats()               // DB stats
db.users.stats()         // Collection stats
db.users.countDocuments()
db.users.distinct("role")
```

---

## 🔹 Mongoose (Node.js ODM)

```ts
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: { type: String, unique: true }
});

const User = mongoose.model("User", userSchema);

// Insert
await User.create({ name: "Shrikant", age: 28 });

// Find
const users = await User.find({ age: { $gt: 25 } });

// Update
await User.updateOne({ name: "Shrikant" }, { $set: { age: 29 } });

// Delete
await User.deleteOne({ name: "Shrikant" });
```
