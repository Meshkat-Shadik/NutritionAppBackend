# NutritionAppBackend

A mock backend for testing either free or paid!

## HOSTING API

https://nutrition-app-ssm.herokuapp.com

## GET Nutrition Data From API (Example)

[GET Method]
https://nutrition-app-ssm.herokuapp.com/test/1kg%20mango

**_Note: 1kg%20mango means 1kg mango, %20 means space_**

### Success Result

```js
{
    "items": [
        {
            "sugar_g": 135.5,
            "fiber_g": 16.3,
            "serving_size_g": 1000,
            "sodium_mg": 9,
            "name": "mango",
            "potassium_mg": 142,
            "fat_saturated_g": 0.9,
            "fat_total_g": 3.8,
            "calories": 616,
            "cholesterol_mg": 0,
            "protein_g": 8.1,
            "carbohydrates_total_g": 147.8
        }
    ]
}
```

### Not Found Result

```js
{
    "items": []
}
```
