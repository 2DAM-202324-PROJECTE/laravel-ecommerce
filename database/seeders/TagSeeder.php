<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class TagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'name' => 'category1',
                'description' => 'TEST1 TEST1 TEST1',
            ],
            [
                'name' => 'category2',
                'description' => 'TEST2 TEST2 TEST2',
            ],
            [
                'name' => 'category3',
                'description' => 'TEST3 TEST3 TEST3',
            ],
        ];
        Category::insert($categories);
    }
}