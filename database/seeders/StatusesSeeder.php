<?php

namespace Database\Seeders;

use App\Models\statuses;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        statuses::create([
            'id' => 1,
            'name' => 'Currently Reading'
        ]);
        statuses::create([
            'id' => 2,
            'name' => 'Read'
        ]);
        statuses::create([
            'id' => 3,
            'name' => 'Planned To Read'
        ]);
        statuses::create([
            'id' => 4,
            'name' => 'Droped'
        ]);
        statuses::create([
            'id' => 5,
            'name' => 'Not Interested'
        ]);
    }
}
