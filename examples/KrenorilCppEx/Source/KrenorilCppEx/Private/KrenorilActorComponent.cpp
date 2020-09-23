// Fill out your copyright notice in the Description page of Project Settings.

#include "KrenorilActorComponent.h"
#include "KrenorilData.h"

// Sets default values for this component's properties
UKrenorilActorComponent::UKrenorilActorComponent()
{
	// Set this component to be initialized when the game starts, and to be ticked every frame.  You can turn these features
	// off to improve performance if you don't need them.
	PrimaryComponentTick.bCanEverTick = true;

	// ...
}

// Called when the game starts
void UKrenorilActorComponent::BeginPlay() {
	Super::BeginPlay();

	KrenorilData::loadContainers();
	FDataDefinition* ironDagger = KrenorilData::getRecordById("IronDagger");
	GEngine->AddOnScreenDebugMessage(-1, 15.0f, FColor::Yellow, ironDagger->getName() + " has damage value = " + FString::FromInt(ironDagger->getIntPropertyValue("Damage")));

	for (auto& difficulty : KrenorilData::getRecordsForSchemaByPrefix("DIFF")) {
		GEngine->AddOnScreenDebugMessage(-1, 15.0f, FColor::Red, difficulty->getName() + " (default health " + FString::FromInt(difficulty->getIntPropertyValue("Player Default Health")) + ")");
	}
}


// Called every frame
void UKrenorilActorComponent::TickComponent(float DeltaTime, ELevelTick TickType, FActorComponentTickFunction* ThisTickFunction)
{
	Super::TickComponent(DeltaTime, TickType, ThisTickFunction);

	// ...
}

