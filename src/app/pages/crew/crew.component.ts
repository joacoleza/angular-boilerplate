import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    NgFor,
    MatButtonModule,
  ],
})
export class CrewComponent {
  dogs = [
    {
      name: 'Sergeant Chonkers "Gravity Defier" Snortington',
      breed: 'Bulldog',
      image: 'bulldog.png',
      description:
        'Known for his impressive ability to sleep through rocket launches. Accidentally caused a zero-G food incident by mistaking the control panel for a snack dispenser.',
    },
    {
      name: ' Major Rex "Galactic Guardian" von Woof',
      breed: 'German Shepherd',
      image: 'german-shepherd.png',
      description:
        'Expert in interstellar security, once detained an asteroid for “suspicious behavior.” Holds the record for fastest spacewalk chase after his own tail.',
    },
    {
      name: 'Captain Goldie "Zero-G Zoomies" McFluff',
      breed: 'Golden Retriever',
      image: 'golden-retriever.png',
      description:
        'First astronaut to chase a comet. Accidentally left floating in space for an hour after enthusiastically jumping for a treat. Still shedding in zero gravity.',
    },
    {
      name: ' Commander Barkley "The Fetchonaut" Johnson',
      breed: 'Labrador Retriever',
      image: 'labrador-retriever.png',
      description:
        'First dog to retrieve a moon rock, only to chew on it. Famous for barking at black holes and mistaking satellites for frisbees.',
    },
    {
      name: 'Dr. Floofington "The Cosmic Genius" von Pomp',
      breed: 'Poodle',
      image: 'poodle.png',
      description: `NASA's top astrophysicist, but refuses to work without a diamond-studded helmet. Once hacked a rover to deliver gourmet treats to Mars.`,
    },
    {
      name: 'Lieutenant Luna "Howl of the Void" Frostpaw',
      breed: 'Siberian Husky',
      image: 'siberian-husky.png',
      description:
        'First dog to bark at the moon… while standing on it. Frequently gets lost in space but always finds her way back using an unexplainable sixth sense for adventure.',
    },
  ];
}
